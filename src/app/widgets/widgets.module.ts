import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetsComponent } from './widgets.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { WeatherComponent } from './weather/weather.component';
import { SocialComponent } from './social/social.component';

@NgModule({
  imports: [CommonModule],
  declarations: [WidgetsComponent, CatalogueComponent, WeatherComponent, SocialComponent],
//  providers: [PaywallService],
  exports: [WidgetsComponent, CatalogueComponent, WeatherComponent, SocialComponent]
})

export class WidgetsModule {}
