import { Inject,InjectionToken, Injectable  } from '@angular/core';
import {IConfig, SCREEN_SIZES} from './IConfig';

@Injectable()
export class ScreenNameService {

private screen: string;
	constructor(
		@Inject(SCREEN_SIZES) config: IConfig
	) {
		//let it be here
		//let config: IConfig = { mobile: 800, tablet: 1600 };
		//let config: IConfig = { mobile: 800, tablet: 1600 };
		let viewportWidth = this.getViewport();
		if (viewportWidth < config.mobile){
			this.screen = 'mobile';
		} else if (config.mobile <= viewportWidth && viewportWidth < config.tablet){
			this.screen = 'tablet';
		} else {
			this.screen = 'desktop';
		}
	 }

	getScreen(): string{
		return this.screen;
	}
	getViewport(): number {
		let win = window,
				d = document,
				e = d.documentElement,
				g = d.getElementsByTagName('body')[0],
				w = win.innerWidth || e.clientWidth || g.clientWidth;
	
		return w;
	}
}
