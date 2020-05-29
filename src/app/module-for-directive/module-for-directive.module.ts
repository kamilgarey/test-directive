import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlyForScreenDirective } from './only-for-screen.directive';
import { ScreenNameService} from './screen-name.service';


@NgModule({
  declarations: [OnlyForScreenDirective],
  imports: [
    CommonModule
	],
	providers: [ScreenNameService],
	exports: [OnlyForScreenDirective]
})
export class ModuleForDirectiveModule { }
