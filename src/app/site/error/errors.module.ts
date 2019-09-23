import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/service/auth/auth.guard';

@NgModule({
  declarations: [ErrorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '404',canActivate: [AuthGuard], component: ErrorComponent },
      { path: '**', redirectTo: '/404'}
      ])
  ]
})
export class ErrorsModule { }