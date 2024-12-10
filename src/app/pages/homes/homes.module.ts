import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbRatingModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

// Swiper Slider
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

//Route
import { HomesRoutingModule } from './homes-routing.module';

// Component
import { SharedModule } from "../../shared/shared.module";
import { IndexComponent } from './index/index.component';

//Image Zoom
import { NgxImageZoomModule } from 'ngx-image-zoom';

// Light Box
import { LightboxModule } from 'ngx-lightbox';
import { LoadSettingsComponent } from './load-settings/load-settings.component';

@NgModule({
  declarations: [
    IndexComponent,
    LoadSettingsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    NgxUsefulSwiperModule,
    HomesRoutingModule,
    NgbRatingModule,
    NgxImageZoomModule,
    LightboxModule,
    NgbTooltipModule
  ]
})
export class HomesModule { }
