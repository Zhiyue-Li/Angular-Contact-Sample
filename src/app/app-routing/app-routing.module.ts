import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from '../form/form.component';
import { ListComponent } from '../list/list.component';
import { UserService } from '../services/user.service';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    resolve: {
      user: UserService,
    },
  },
  {
    path: 'form',
    component: FormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [UserService],
})
export class AppRoutingModule {}
