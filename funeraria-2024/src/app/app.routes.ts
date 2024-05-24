import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InicioComponent } from "./publico/inicio/inicio.component";
import { RutaNoEncontradaComponent } from "./publico/errores/ruta-no-encontrada/ruta-no-encontrada.component";

export const routes: Routes = [
  {
    path:"inicio",
    component: InicioComponent
  },
  {
    path:"",
    pathMatch: "full",
    redirectTo: "/inicio"
  },
  {
    path:"seguridad",
    loadChildren: () => import("./modulos/seguridad/seguridad.module").then(mod => mod.SeguridadModule)
  },
  {
    path:"parametros",
    loadChildren: () => import("./modulos/parametros/parametros.module").then(mod => mod.ParametrosModule)
  },
  {
    path:"reportes",
    loadChildren: () => import("./modulos/reportes/reportes.module").then(mod => mod.ReportesModule)
  },
  {
    path:"ventas",
    loadChildren: () => import("./modulos/ventas/ventas.module").then(mod => mod.VentasModule)
  },
  {
    path:"**",
    component: RutaNoEncontradaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}