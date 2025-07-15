import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { NgxParticlesModule } from '@tsparticles/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { WorkComponent } from './pages/work/work.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StudiedPanelComponent } from './about/studied-panel/studied-panel.component';
import { LivedPanelComponent } from './about/lived-panel/lived-panel.component';
import { SeekPanelComponent } from './about/seek-panel/seek-panel.component';
import { PersonalityPanelComponent } from './about/personality-panel/personality-panel.component';


import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { RadialSelectorComponent } from './components/radial-selector/radial-selector.component';
gsap.registerPlugin(ScrollToPlugin);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    WorkComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    StudiedPanelComponent,
    LivedPanelComponent,
    SeekPanelComponent,
    PersonalityPanelComponent,
    RadialSelectorComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxParticlesModule,
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
