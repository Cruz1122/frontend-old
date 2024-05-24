import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from './publico/pagina-maestra/encabezado/encabezado.component';
import { PiePaginaComponent } from './publico/pagina-maestra/pie-pagina/pie-pagina.component';
import { MenuLateralComponent } from './publico/pagina-maestra/menu-lateral/menu-lateral.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, EncabezadoComponent, PiePaginaComponent, MenuLateralComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css' ]
  })
  export class AppComponent {
    title = 'funeraria-2024';
  }
