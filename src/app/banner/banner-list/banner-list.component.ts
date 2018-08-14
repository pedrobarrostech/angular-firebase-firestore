import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BannerService } from '../banner.service';
import { UploadService } from '../../shared/_services/upload.service';
import { Subject } from 'rxjs';
import datatablesConfig from '../../shared/_configs/datatable-pt-br.config';
import * as firebase from 'firebase';
import { DataTableDirective } from 'angular-datatables';


@Component({
  selector: 'banner-list',
  templateUrl: './banner-list.component.html',
  styleUrls: ['./banner-list.component.scss']
})
export class BannerListComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(DataTableDirective)
  public dtElement: DataTableDirective;
  public dtTrigger = new Subject();
  public isLoading = true;
  public addBannerForm: FormGroup;
  private name = new FormControl('', Validators.required);
  private order = new FormControl('', Validators.required);
  private active = new FormControl('', Validators.required);
  private infoMsg = { body: '', type: 'info'};
  private banners: any = [];
  private banner = {};
  private imageEdit;
  private imageEditRef;
  private isEditing = false;
  private dtOptions: DataTables.Settings = {};
  private bannerEditImage = {};

  constructor(private _bannerService: BannerService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dtOptions = datatablesConfig;
    this.banners = this.getBanners();
    this.addBannerForm = this.formBuilder.group({
      name: this.name,
      order: this.order,
      image: null,
      imageRef: null,
      active: this.active
    });
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  getBanners(): void {
    this._bannerService.getData().subscribe(
      data => {
        this.banners = data;
        this.rerender();
      },
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  addBanner(): void {
    this._bannerService.create(this.addBannerForm.value);
    this.rerender();
  }

  editBanner(banner): void {
    if (this.imageEdit) {
      banner.image = this.imageEdit;
      banner.imageRef = this.imageEditRef;
    }

    this._bannerService.update(banner.id, banner).then(
      res => {
        this.isEditing = false;
        this.sendInfoMsg('Banner editado com sucesso.', 'success');
        this.rerender();
      },
      error => console.log(error)
    );
  }

  deleteBanner(banner): void {
    if (window.confirm('Tem certeza que quer deletar este banner?')) {
      this._bannerService.delete(banner.id).then(
        res => {
          UploadService.deleteFile(banner.imageRef);
          this.sendInfoMsg('Banner deletado com sucesso.', 'success');
          this.getBanners();
          this.rerender();
        },
        error => console.log(error)
      );
    }
  }

  async onFileChange(event) {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {

        const filename = UploadService.generateId() + file.name;
        const ref = firebase.storage().ref();
        const storageRef = ref.child(filename);
        storageRef.put(file).then((snapshot) => {
          snapshot.ref.getDownloadURL().then((downloadURL) => {
            this.addBannerForm.get('image').setValue(downloadURL);
            this.addBannerForm.get('imageRef').setValue(filename);
            this.imageEdit = downloadURL;
            this.imageEditRef = filename;
          });
        });
      };
    }
  }

  enableEditing(banner): void {
    this.isEditing = true;
    this.banner = banner;
  }

  cancelEditing(): void {
    this.isEditing = false;
    this.banner = {};
    this.sendInfoMsg('Edição de banner cancelada.', 'warning');
  }

  sendInfoMsg(body, type, time = 3000): void {
    this.infoMsg.body = body;
    this.infoMsg.type = type;
    window.setTimeout(() => this.infoMsg.body = '', time);
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

}
