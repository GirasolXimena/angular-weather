import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from '../app/home/home.component';
import {DetailsComponent} from '../app/details/details.component';
import {AddCardComponent} from '../app/add-card/add-card.component';
// import {LoginComponent} from './pages/login/login.component';
// import {SignupComponent} from './pages/signup/signup.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'details/:city', component: DetailsComponent},
    {path: 'add', component: AddCardComponent},
    // {path: 'login', component: LoginComponent},
    // {path: 'signup', component: SignupComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
