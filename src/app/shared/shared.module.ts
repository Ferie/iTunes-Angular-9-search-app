import { NgModule } from '@angular/core';
import { UxHeaderComponent } from './components/ux-header/ux-header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GoBackComponent } from './components/go-back/go-back.component';

const UX_COMPONENTS: any[] = [UxHeaderComponent];
    // GoBackComponent

const UX_MODULES: any[] = [
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatToolbarModule,
  ReactiveFormsModule,
  RouterModule,
];

@NgModule({
  imports: UX_MODULES,
  declarations: UX_COMPONENTS,
  entryComponents: [],
  exports: [...UX_COMPONENTS, ...UX_MODULES],
})
export class SharedModule {}
