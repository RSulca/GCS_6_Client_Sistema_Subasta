import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { UserEmiterService } from 'src/app/services/user-emiter.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-payment-tab',
  templateUrl: './payment-tab.component.html',
  styleUrls: ['./payment-tab.component.css']
})
export class PaymentTabComponent implements OnInit {

  user: any = {};
  cardForm: FormGroup;

  constructor(private userInfoEmitter: UserEmiterService, private userService: UserService,
    private loginService: LoginService, private fb: FormBuilder) {
    this.initForm();
  }

  ngOnInit(): void {
    this.getUser(this.loginService.usuario._id);

  }

  getUser(id) {
    this.userService.getUserById(id).subscribe((data: any) => {
      this.user = data.user;
      this.cardForm.patchValue({
        card: this.user.card,//probar
      })
    })
  }

  initForm() {
    this.cardForm = this.fb.group({
      card: ['', []],
    });
    this.cardForm.valueChanges.subscribe(data => {
      this.userInfoEmitter.addCardInformation(data);
    })
  }


}
