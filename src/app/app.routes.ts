import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { MfaComponent } from './pages/mfa/mfa.component';
import { UploadFileComponent } from './pages/upload-file/upload-file.component';

export const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: 'mfa', component: MfaComponent },
      { path: 'upload-file', component: UploadFileComponent},
      { path: '', redirectTo: 'mfa', pathMatch: 'full'}
    ]
  },
  { path: '', redirectTo: 'main', pathMatch: 'full' }
];
