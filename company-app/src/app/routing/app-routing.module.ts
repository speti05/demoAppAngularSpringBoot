import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from '../list/list.component';
import { AddComponent } from '../add/add.component';
import { ModifyComponent } from '../modify/modify.component';

const routes: Routes = [{ path: 'welcome', component: ListComponent },
  { path: 'add', component: AddComponent },
  { path: 'modify/:id', component: ModifyComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
