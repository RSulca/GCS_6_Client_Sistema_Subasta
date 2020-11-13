import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { SupervisorLayoutRoutes } from './supervisor-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(SupervisorLayoutRoutes),
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ]
})
export class SupervisorLayoutModule {}
