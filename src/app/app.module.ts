import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavLogoComponent } from './layout/header/components/nav-logo/nav-logo.component';
import { NavSearchComponent } from './layout/header/components/nav-search/nav-search.component';
import { NavAccountComponent } from './layout/header/components/nav-account/nav-account.component';
import { NavLinksComponent } from './layout/header/components/nav-links/nav-links.component';
import { ContactFormComponent } from './layout/footer/components/contact-form/contact-form.component';
import { ContactSectionComponent } from './layout/footer/components/contact-section/contact-section.component';
import { InfoComponent } from './layout/footer/components/info/info.component';
import { NavLinkComponent } from './layout/side-nav/components/nav-link/nav-link.component';
import { AccountDividerComponent } from './layout/side-nav/components/account-divider/account-divider.component';
import { OrderGrowingRepresentationComponent } from './features/pages/order-growing-representation/order-growing-representation.component';
import { GraphicFieldStructureComponent } from './features/components/graphic-field-structure/graphic-field-structure.component';
import { LegendComponent } from './features/components/legend/legend.component';
import { ProductCardComponent } from './features/components/product-card/product-card.component';
import { GraphicGrowingPhasesComponent } from './features/components/graphic-growing-phases/graphic-growing-phases.component';
import { GrowingPhaseDescriptionComponent } from './features/components/growing-phase-description/growing-phase-description.component';
import { OutsourcesIconsComponent } from './features/components/outsources-icons/outsources-icons.component';
import { OrderProductInformationComponent } from './features/components/order-product-information/order-product-information.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    FooterComponent,
    NavLogoComponent,
    NavSearchComponent,
    NavAccountComponent,
    NavLinksComponent,
    ContactFormComponent,
    ContactSectionComponent,
    InfoComponent,
    NavLinkComponent,
    AccountDividerComponent,
    OrderGrowingRepresentationComponent,
    GraphicFieldStructureComponent,
    LegendComponent,
    ProductCardComponent,
    GraphicGrowingPhasesComponent,
    GrowingPhaseDescriptionComponent,
    OutsourcesIconsComponent,
    OrderProductInformationComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
