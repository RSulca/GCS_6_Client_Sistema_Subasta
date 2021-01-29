import { group } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { LoginService } from "src/app/services/login.service";
import { NotifierService } from "src/app/services/notifier.service";
import { ClientReq } from "../../../models/request/client.model";
interface ErrorValidate {
  [s:string]: boolean
}

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  process: boolean = false;
  clientRequest: ClientReq = new ClientReq();

  constructor(
    private fb: FormBuilder,
    private nf: NotifierService,
    private loginService: LoginService
  ) {
    this.initForm();
  }

  ngOnInit() {}

  initForm() {
    this.registerForm = this.fb.group(
      {
        names: ["", [Validators.required, this.validarCampo]],
        surnames: ["", [Validators.required]],
        dni: [
          "",
          [
            Validators.required,
            Validators.maxLength(8),
            Validators.minLength(8),
          ],
          Validators.pattern("[1-9]"),
        ],
        email: [
          "",
          [Validators.required, Validators.email],
          Validators.nullValidator,
        ],
        password: ["", [Validators.required]],
        password2: ["", [Validators.required]],
        conditions: [false, [Validators.required]],
      },
      { validators: this.areEquals("password", "password2") }
    );
  }

  register(event) {
    event.preventDefault();
    const vc = this.registerForm.controls["conditions"].value;
    if (!vc) {
      this.nf.notification("warning", {
        title: "Debe aceptar los terminos y condiciones.",
        description: "Los terminos y condiciones no han sido aceptados.",
      });
    } else {
      this.populateRequest();
      this.loginService.registerClient(this.clientRequest).subscribe(
        (data) => {
          //el token lo trae data
          //guardar en localstorage

          this.nf.notification("success", {
            title: "Registro exitoso.",
            description: "Te has registrado correctamente.",
          });
        },
        (e) => {
          this.process = false;
          this.nf.notification("error2", {
            title: `Error `,
            description: e.message,
          });
        }
      );
    }
  }

  areEquals(pass1: any, pass2: any) {
    return (group: FormGroup) => {
      let password1 = group.controls[pass1].value;
      let password2 = group.controls[pass2].value;
      if (password1 === password2) {
        return null;
      }
      return {
        areEquals: true,
      };
    };
  }

  validarDni(evento: any) {
    /* evento.value = evento.value.replace(/[^0-9]/g, ""); */
    if(evento.charCode >= 48 && evento.charCode <= 57){
      return true;
     }
     return false;
  }


  validarCampo(control: FormControl): ErrorValidate {
    if (control.value?.trim() === "") {
      return {
        validarCampo: true,
      };
    }

    return null;
  }

  
  populateRequest() {
    this.clientRequest.name = this.registerForm.controls["names"].value;
    this.clientRequest.lastname = this.registerForm.controls["surnames"].value;
    this.clientRequest.dni = this.registerForm.controls["dni"].value;
    this.clientRequest.email = this.registerForm.controls["email"].value;
    this.clientRequest.password = this.registerForm.controls["password"].value;
  }
}
