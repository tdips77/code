import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {MainNavComponent} from "./main-nav/main-nav.component";
import {PageHeaderComponent} from "./page-header/page-header.component";
import {PageContactComponent} from "./page-contact/page-contact.component";
import {PageFooterComponent} from "./page-footer/page-footer.component";
import { CareersComponent } from './careers/careers.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TokenasiaindexComponent } from './tokenasiaindex/tokenasiaindex.component';
import { FormComponent } from './form/form.component';
import { NotfoundComponent } from './notfound/notfound.component';


const appRoutes: Routes = [
  { path: '', component: PageHeaderComponent},
  { path: 'careers', component: CareersComponent },
  { path: 'form', component: FormComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'tokenasiaindex', component: TokenasiaindexComponent },
  { path: 'notfound', component: NotfoundComponent },
  { path: '**', redirectTo: 'notfound' }
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    PageHeaderComponent,
    PageContactComponent,
    PageFooterComponent,
    CareersComponent,
    TermsComponent,
    PrivacyComponent,
    TokenasiaindexComponent,
    FormComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
     RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
