import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  // tslint:disable-next-line:typedef
  get f() {return this.loginForm.controls; }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    return this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.loginForm.invalid){
      return;
    }

    this.loading = true;
    this.authService.login(this.f.username.value, this.f.password.value)
      .pipe()
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error1 => {
          this.error = error1;
          this.loading = false;
        }
      );
  }

}
