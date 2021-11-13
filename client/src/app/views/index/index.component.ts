import { Component, ElementRef, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { RequestLogin } from '../../models/requestLogin';
import { RequestRegister } from '../../models/requestRegister';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public requestLogin: RequestLogin;
  public requestRegister: RequestRegister;

  constructor(
    private elementRef: ElementRef,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
    this.requestRegister = new RequestRegister(); 
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = 'linear-gradient(to right, #50E3A4 , #00CCAD)';
  }

  public doLogin(): void {
    this.loginService.doLogin(this.requestLogin).subscribe(
      () => {
        this.router.navigate(['lesson']);
      },
      (err) => {
        alert(err.error.message);
      }
    );
  }

  reset() {
    this.requestRegister.name = ''
    this.requestRegister.email = ''
    this.requestRegister.password = ''
  }

  public doRegister(): void {

    this.loginService.doRegister(this.requestRegister).subscribe(
      (data) => {
        console.log(data)
        alert(data)
        this.reset()
      },
      (err) => {
        alert(err.error.message);
      }
    );
  }

}
