import { Cards } from './cards';
import { AppService } from './app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'MtgFront';
  card = {} as Cards;
  cards: Cards[];
  base64:"";
  logo = 'assets/403-4031187_mtg-arena-icon-1c-magic-the-gathering-arena.png'


  constructor(private appservice: AppService){}

  ngOnInit() {
    this.searchCards();
  }

  searchCards(){
    this.appservice.list().subscribe((dados) => (this.cards = dados));
  }
}
