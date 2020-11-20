import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupervisorSidebarComponent } from './supervisor-sidebar/supervisor-sidebar.component';
import { SupervisorNavbarComponent } from './supervisor-navbar/supervisor-navbar.component';
import { SupervisorFooterComponent} from './supervisor-footer/supervisor-footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
    SupervisorNavbarComponent,
    SupervisorSidebarComponent,
    SupervisorFooterComponent
  ],
  exports: [
    SupervisorNavbarComponent,
    SupervisorSidebarComponent,
    SupervisorFooterComponent
  ]
})
export class SupervisorComponentsModule { }