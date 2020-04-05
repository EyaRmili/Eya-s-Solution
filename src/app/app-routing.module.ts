import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PeopleComponent } from './people/people.component';


const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {path:'people',
  component:PeopleComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
