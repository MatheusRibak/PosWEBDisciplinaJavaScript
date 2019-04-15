import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  signInForm: FormGroup;
  error: string;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.signInForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.error) this.error = null
    this.authService.signIn(
      this.signInForm.value
    ).subscribe(
      (response) => this.router.navigateByUrl('/'),
      (error) => {
        this.error = error.message;
        this.signInForm.get('password').reset();
      }
    )
  }
}
