import { Component, OnInit } from '@angular/core';
import { OmdbService } from 'src/app/services/omdb.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  busqueda?:string;
  result?: any;
  constructor(private readonly omdbService:OmdbService) { }
  ngOnInit(): void {
  }
  buscar():void{
    this.omdbService.getQuery(`&s=${this.busqueda}`)
    .subscribe(data => {
      this.result = data['Search'];
      console.table(data);
    })
  }
}
