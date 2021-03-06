import {
  BrowserModule,
  BrowserTransferStateModule
} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoute } from './app.route';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// Firestarter App Modules
import { UploadExampleModule } from './upload-example/upload-example.module';
import { UiModule } from './ui/ui.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { NotesModule } from './notes/notes.module';
import { BannerModule } from './banner/banner.module';
import { MinibannerModule } from './minibanner/minibanner.module';

// AngularFire2 Modules
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireFunctionsModule } from 'angularfire2/functions';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    AppRoute,
    LoginModule,
    HomeModule,
    UiModule,
    NotesModule,
    BannerModule,
    MinibannerModule,
    UploadExampleModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireFunctionsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
