import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/login.model';
import { HomeService } from 'src/app/services/home.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [HomeService, LoginService]
})
export class LoginComponent implements OnInit {

    public loginForm: FormGroup;
    public enviado: boolean = false;
    public errorMsg!: string | null;
    public isLoading: boolean = false;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private loginService: LoginService
    ) {
        this.loginForm = this.formBuilder.group({
            username: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
     }

    ngOnInit(): void { }

    //MÉTODO QUE MANDA EL FORMULARIO Y REDIRIGE A LA PANTALLA QUE PUEDE USAR EL ADMINISTRADOR
    submitForm() {
        this.enviado = true;

        let loginModel: LoginModel = new LoginModel(this.loginForm.controls.username.value, 
            this.loginForm.controls.password.value, '');

        this.isLoading = true;
        this
        .loginService
        .performLogin(loginModel)
        .subscribe(
            respuesta => {
                console.log(JSON.stringify(respuesta));
                this.isLoading = false;
                this.errorMsg = null;
                this.goToOfertas();
            }, error => {
                console.log('ERROR:' + JSON.stringify(error));
                this.errorMsg = `⚠️ ¡No se ha podido iniciar la sesión!`
                this.isLoading = false;
            },
            () => {
                this.isLoading = false;
            });

    }

    //MÉTODO PARA VOLVER A LA PÁGINA ANTERIOR
    public goToHome(): void{
        this.router.navigate(['home']);
    }

    //MÉTODO QUE LLEVA A LA PÁGINA QUE PUEDE USAR EL ADMINISTRADOR
    public goToOfertas(): void{
        this.router.navigate(['/home/ofertas']);
    }
}
