import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProfileComponent } from './profile/profile.component';
import { DirectiveComponent } from './directive/directive.component';
import { PipeComponent } from './pipe/pipe.component';
import { ChildComponent } from './inheritance/child.component';
import { MasterComponent } from './nested/master.component';
import { ParenthooksComponent } from './hooks/parenthooks.component';
import { LoginComponent } from './services/login.component';
import { DashboardComponent } from './services/dashboard.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { ModeldrivenComponent } from './modeldriven/modeldriven.component';
import { UserListComponent } from './modeldriven/user-list.component';

const routes: Routes = [
    { path: '', component: DatabindingComponent },
    {
        path: 'about/:id', component: AboutComponent, children: [
            { path: 'profile', component: ProfileComponent }
        ]
    },
    { path: 'notfound', component: NotfoundComponent },
    { path: 'directive', component: DirectiveComponent },
    { path: 'pipe', component: PipeComponent },
    { path: 'inheritance', component: ChildComponent },
    { path: 'nested', component: MasterComponent },
    { path: 'hooks', component: ParenthooksComponent },
    { path: 'account', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'templatedriven', component: TemplatedrivenComponent },
    { path: 'modeldriven', component: ModeldrivenComponent },
    { path: 'users', component: UserListComponent },
    { path: '**', redirectTo: 'notfound' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
