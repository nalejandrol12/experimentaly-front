import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {

  images = [
    { path: 'assets/graphic-resources/imagenes_Mesa_de_trabajo_1.jpg' },
    { path: 'assets/graphic-resources/imagenes_Mesa_de_trabajo_1_copia.jpg' },
    { path: 'assets/graphic-resources/imagenes_Mesa_de_trabajo_1_copia_3.jpg' },
    { path: 'assets/graphic-resources/imagenes_Mesa_de_trabajo_1_copia_3.jpg' },
    { path: 'assets/graphic-resources/imagenes_Mesa_de_trabajo_1_copia_3.jpg' },
    { path: 'assets/graphic-resources/imagenes_Mesa_de_trabajo_1_copia_3.jpg' },
    { path: 'assets/graphic-resources/imagenes_Mesa_de_trabajo_1_copia.jpg' },
    { path: 'assets/graphic-resources/imagenes_Mesa_de_trabajo_1_copia.jpg' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
