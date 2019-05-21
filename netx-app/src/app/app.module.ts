import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { NgxPopper } from 'angular-popper';
import { ShowcaseSliderComponent } from './components/showcase-slider/showcase-slider.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ShowcaseSliderComponent
    ],
    imports: [
        BrowserModule,
        NgxPopper
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
