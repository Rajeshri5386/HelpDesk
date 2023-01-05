import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './common/component/login/login.component';
import { AuthGuard } from './common/gaurds/auth.guards';

const routes: Routes = [
  {
    path: '',
    component: AppComponent, 
    canActivate: [AuthGuard]    
  },  
  {
    path: 'login',
    component: LoginComponent,
  }, 
  {
    path: 'user',  
    canActivate: [AuthGuard],   
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),    
  },
    {
      path: 'admin',
      canActivate: [AuthGuard],    
      loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
    },
    { path: '**', redirectTo: 'login' },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
