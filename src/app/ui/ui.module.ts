import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';

import { MainNavComponent } from './main-nav/main-nav.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { NotificationMessageComponent } from './notification-message/notification-message.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SsrPageComponent } from './ssr-page/ssr-page.component';
import { SsrPageRoute } from './ssr-page/ssr.page.route';
@NgModule({
  imports: [CoreModule, SsrPageRoute],
  declarations: [
    MainNavComponent,
    LoadingSpinnerComponent,
    NotificationMessageComponent,
    UserProfileComponent,
    SsrPageComponent
  ],
  exports: [
    MainNavComponent,
    LoadingSpinnerComponent,
    NotificationMessageComponent,
    UserProfileComponent
  ]
})
export class UiModule { }
