import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

//export class ListadoComponent implements OnInit {

// constructor() { }

// ngOnInit(): void {
// }
export class ListadoComponent {

  heroes: string[] = ["Goku", "Vegeta", "Spiderman", "Hulk", "Thor"];
  heroresBorrados: string[] = [];

  borrarHeroe(index: number): void {
    let heroeBorrado = this.heroes.splice(index, 1);
    this.heroresBorrados.push(heroeBorrado.toString())
  }

  existHeroe(): boolean {
    return !(this.heroes.length > 0);
  }

}
