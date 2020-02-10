import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs';

import { ConcertService } from '../shared/services/concert.service';
import { Concert } from '../shared/model/concert.model';
import { Venue } from '../shared/model/venue.model';

import {Routes, RouterModule, ActivatedRoute} from '@angular/router';
import { AuthService } from '../shared/services/auth/auth.service.service';

@Component({
  selector: 'app-concert',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.css']
})
export class ConcertComponent implements OnInit {

  public concert$: Observable<Concert[]>;

  typeTickets: string = "Tickets";
  SoldOut: string = "Sold Out";
  statusAvailable: string = "available";

  cardLink: string = "https://dummyimage.com/100x100/FFA500/000000.png&text=";
  cardText: string = "+";

  naam: string = this.route.snapshot.params.naam;

  flag: string = " flag";

  constructor(
    private ConcertService: ConcertService, 
    private route: ActivatedRoute,
    private authService: AuthService
    ) { }

  ngOnInit() {
    console.log(this.naam);

    this.concert$ = this.ConcertService.getConcert(this.naam);
    this.concert$.subscribe(res => console.log(res));
  }

  onClick(link: string) {
    console.log(link);
    window.open(link);
  }
}
