import { Component } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {AuthenticationRequest} from "../../models/authentication-request";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) {}


  login(username: string, password: string): void {
    debugger

    // نفذ تسجيل الدخول هنا، ثم انتقل إلى الصفحة الرئيسية
    const request: AuthenticationRequest = { username, password };
    this.authService.authenticate(request).subscribe(
      (response) => {
        console.log('تم تسجيل الدخول بنجاح', response);
        // انتقل إلى الصفحة الرئيسية بعد نجاح تسجيل الدخول
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('فشل تسجيل الدخول', error);
        // يمكنك إضافة منطق إضافي للتعامل مع الأخطاء هنا
      }
    );
  }
}
