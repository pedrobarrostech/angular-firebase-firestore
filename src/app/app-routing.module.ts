import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/_services/auth.guard';
import { UserLoginComponent } from './ui/user-login/user-login.component';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';
import { BannerComponent } from './banner/banner.component';
import { MinibannerComponent } from './minibanner/minibanner.component';
import { UploadPageComponent } from './upload-page/upload-page.component';

import { SsrPageComponent } from './ui/ssr-page/ssr-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'notes', component: NotesListComponent,  canActivate: [AuthGuard] },
  { path: 'banners', component: BannerComponent,  canActivate: [AuthGuard] },
  { path: 'uploads',  component: UploadPageComponent,  canActivate: [AuthGuard] },
  { path: 'minibanners',  component: MinibannerComponent,  canActivate: [AuthGuard] },
  { path: 'ssr', component: SsrPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
