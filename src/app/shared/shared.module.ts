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

import { ClientService } from './_services/client.service';
import { ScheduleService } from './_services/schedule.service';
import { EntryService } from './_services/entry.service';
import { AuthGuard } from './_guards/auth.guard';
import { MessageService } from './_services/message.service';
import { BannerService } from './_services/banner.service';
import { SectionService } from './_services/section.service';
import { ProductService } from './_services/product.service';
import { ServiceService } from './_services/service.service';
import { UserService } from './_services/user.service';
import { UploadService } from './_services/upload.service';

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
