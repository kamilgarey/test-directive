import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { ScreenNameService } from './screen-name.service';
@Directive({
	selector: '[onlyForScreen]'
})
export class OnlyForScreenDirective {
	constructor(
		private templateRef: TemplateRef<any>,
		private screenNameService: ScreenNameService,
		private viewContainer: ViewContainerRef) { }
	@Input() set onlyForScreen(screen: string) {
		if (this.screenNameService.getScreen() === screen) {
			this.viewContainer.createEmbeddedView(this.templateRef);
		} else {
			this.viewContainer.clear();
		}
	}
}