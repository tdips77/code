import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EqualTextValidator } from 'angular2-text-equality-validator';

import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { AppRoutingModule } from './app.routing';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProfileComponent } from './profile/profile.component';
import { DirectiveComponent } from './directive/directive.component';
import { HighlightDirective } from './highlight.directive';
import { PipeComponent } from './pipe/pipe.component';
import { ReversePipe } from './reverse.pipe';
import { ParentComponent } from './inheritance/parent.component';
import { ChildComponent } from './inheritance/child.component';
import { MasterComponent } from './nested/master.component';
import { DetailsComponent } from './nested/details.component';
import { ParenthooksComponent } from './hooks/parenthooks.component';
import { ChildhooksComponent } from './hooks/childhooks.component';
import { LoginComponent } from './services/login.component';
import { DashboardComponent } from './services/dashboard.component';
import { UserService } from './services/user.service';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { ModeldrivenComponent } from './modeldriven/modeldriven.component';
import { UserListComponent } from './modeldriven/user-list.component';
import { AuthService } from './modeldriven/services/auth.service';

@NgModule({
  declarations: [
    EqualTextValidator,
    AppComponent,
    DatabindingComponent,
    AboutComponent,
    NotfoundComponent,
    ProfileComponent,
    DirectiveComponent,
    HighlightDirective,
    PipeComponent,
    ReversePipe,
    ParentComponent,
    ChildComponent,
    MasterComponent,
    DetailsComponent,
    ParenthooksComponent,
    ChildhooksComponent,
    LoginComponent,
    DashboardComponent,
    TemplatedrivenComponent,
    ModeldrivenComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, ReactiveFormsModule, AppRoutingModule
  ],
  providers: [UserService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
