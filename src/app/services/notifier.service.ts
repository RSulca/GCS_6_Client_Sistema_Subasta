import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as message from '../util/message';

@Injectable()
export class NotifierService {

  constructor(private toastr: ToastrService) { }

  notification(status, data) {

    switch (status) {
      case 'error': {
        this.toastr.error(data.json().message != undefined ? data.json().message : message.MESAGGE_ERROR, 'Surgio un problema', {
          timeOut: 5000,
          closeButton: true,
          progressBar: true
        });
        break;
      }
      case 'error2': {
        this.toastr.error(data.description, data.title, {
          timeOut: 4000,
          closeButton: true,
          progressBar: true
        });
        break;
      }
      case 'warning': {
        this.toastr.warning(data.description, data.title, {
          timeOut: 4000,
          closeButton: true,
          progressBar: true
        });
        break;
      }
      case 'success': {
        this.toastr.success(data.description, data.title, {
          timeOut: 3000,
          closeButton: true,
          progressBar: true
        });
        break;
      }
      case 'info': {
        this.toastr.info(data.description, data.title, {
          timeOut: 3000,
          closeButton: true,
          progressBar: true
        });
        break;
      }
    }

  }
}
