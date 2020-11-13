import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { SupervisorLayoutComponent } from './layouts/supervisor-layout/supervisor-layout.component';

/*external modules*/
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import {SupervisorComponentsModule } from './pages/supervisor/supervisorComponents.module'
import { SupervisorService } from './services/supervisor.service';
import { NotifierService } from 'src/app/services/notifier.service';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    SupervisorComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added 
    NgxDropzoneModule   
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    SupervisorLayoutComponent
  ],
  providers: [
    SupervisorService,
    NotifierService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
