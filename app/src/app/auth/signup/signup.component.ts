import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signUpForm: FormGroup;
  error: string;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.error) this.error = null
    this.authService.signUp(
      this.signUpForm.value
    ).subscribe(
      (response) => this.router.navigateByUrl('/auth/signin'),
      (error) => {
        this.error = error.message;
        this.signUpForm.get('password').reset();
      }
    )
  }
}
