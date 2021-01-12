import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'contacts',
    loadChildren: () => import('./pages/contacts/contacts.module').then( m => m.ContactsPageModule)
  },
  {
    path: '',
    redirectTo:'contacts',
    pathMatch: 'full'
  },
  {
    path:'addContact',
    loadChildren: () => import('./pages/form/form.module').then( m => m.FormPageModule)

  },
  {
    path: 'form-modal',
    loadChildren: () => import('./shared/modals/form-modal/form-modal.module').then( m => m.FormModalPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
