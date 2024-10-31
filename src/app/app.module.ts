import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TopComponent } from './components/top/top.component';
import { CompanyComponent } from './components/company/company.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { ServicesComponent } from './components/services/services.component';
import { HistoryComponent } from './components/history/history.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { BusinessPlanComponent } from './components/business-plan/business-plan.component';
import { FormsModule } from '@angular/forms';
import { PhotosSlideComponent } from './components/photos-slide/photos-slide.component';
import { AnimationService } from 'src/styles/animation.service';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    TopComponent,
    CompanyComponent,
    SocialMediaComponent,
    ServicesComponent,
    HistoryComponent,
    FooterComponent,
    ContactComponent,
    BusinessPlanComponent,
    PhotosSlideComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AnimationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
