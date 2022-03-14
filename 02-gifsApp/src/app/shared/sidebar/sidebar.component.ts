import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor( private giftService: GifsService) { }

  get historial() {
    return this.giftService.historial;
  }

  buscar(termino: string) {
    this.giftService.buscarGifs(termino);
  }

}
