import { Component } from '@angular/core';
import { UsuariosService } from './Services/usuarios.service'
import { LoginComponent } from './Components/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';
}

