import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTablesModule } from 'angular-datatables';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { CommonModule } from '@angular/common';

import { ClientService } from '../shared/_services/client.service';
import { ScheduleService } from '../shared/_services/schedule.service';
import { EntryService } from '../shared/_services/entry.service';
import { AuthGuard } from '../shared/_guards/auth.guard';
import { MessageService } from '../shared/_services/message.service';
import { BannerService } from '../shared/_services/banner.service';
import { SectionService } from '../shared/_services/section.service';
import { ProductService } from '../shared/_services/product.service';
import { ServiceService } from '../shared/_services/service.service';
import { UserService } from '../shared/_services/user.service';
import { UploadService } from '../shared/_services/upload.service';

const MODULES = [
  CommonModule,
  HttpClientModule,
  RouterModule,
  BrowserModule,
  FormsModule,
  ReactiveFormsModule,
  BrowserAnimationsModule,
  DataTablesModule,
  AngularFireAuthModule,
  AngularFireDatabaseModule
];

const PIPES = [
  // put pipes here
];

const COMPONENTS = [
  // put shared components here
];

const SERVICES = [
  ClientService,
  ScheduleService,
  AuthGuard,
  EntryService,
  MessageService,
  BannerService,
  SectionService,
  ServiceService,
  ProductService,
  UserService,
  UploadService
];

@NgModule({
  imports: [
    ...MODULES
  ],
  declarations: [
    ...PIPES,
    ...COMPONENTS
  ],
  providers: [
    ...SERVICES
  ],
  exports: [
    ...MODULES,
    ...PIPES,
    ...COMPONENTS
  ]
})
export class SharedModule { }
