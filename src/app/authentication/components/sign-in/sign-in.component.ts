import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SessionService } from '../../../shared/services/session.service';
import { MatSnackBar } from '@angular/material';
import { User } from '../../../shared/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public account: string;
  public password: string;
  public signInForm: FormGroup;

  constructor(private readonly router: Router,
              private readonly snackBar: MatSnackBar,
              public readonly session: SessionService) {
    this.account = null;
    this.password = null;
    this.signInForm = new FormGroup({
      account: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {}

  signIn() {
    this.session.signIn(this.signInForm.controls['account'].value, this.signInForm.controls['password'].value)
      .subscribe((user: User | null) => {
        console.log(user);
        if (!user) {
          this.snackBar.open('Пользователь не найден', 'Закрыть', {
            duration: 2000,
          });
        } else {
          this.router.navigate(['/machines']);
        }
      });
  }

}
