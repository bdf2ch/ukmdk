import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public account: string;
  public password: string;
  public signInForm: FormGroup;

  constructor() {
    this.account = null;
    this.password = null;
    this.signInForm = new FormGroup({
      account: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

}
