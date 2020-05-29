import { InjectionToken } from '@angular/core';

export interface IConfig {
  mobile: number;
  tablet: number;
}
export const SCREEN_SIZES = new InjectionToken<IConfig>('app.config');