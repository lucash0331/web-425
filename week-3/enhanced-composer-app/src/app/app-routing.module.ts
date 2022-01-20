/**
 * Title: app-routing.module.ts
 * Author: Lucas Hoffman
 * Date: January 20, 2022
 * Description: Routing file
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Import statements for Composer List, About, Contact
import { ComposerListComponent } from './composer-list/composer-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/composer-list',
    pathMatch: 'full'
  },
  {
    path: 'composer-list',
    component: ComposerListComponent,
  },
  {
    path: 'composer-details/:composerId',
    component: ComposerDetailsComponent
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
