import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../components/register/register.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegistroRoutingModule } from 'src/app/pages/registro-routing.module';



@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  exports: [RegisterComponent]
})
export class RegistroComponentsModule { }
