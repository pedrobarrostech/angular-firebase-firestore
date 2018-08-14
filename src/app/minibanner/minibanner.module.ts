import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { MinibannerComponent } from './minibanner.component';
import { MinibannerService } from '../core/_services/minibanner.service';

@NgModule({
  imports: [
    CoreModule
  ],
  declarations: [MinibannerComponent],
  providers: [MinibannerService]
})
export class MinibannerModule { }
