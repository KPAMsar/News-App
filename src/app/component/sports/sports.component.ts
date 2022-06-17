import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../service/news.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {

sports:any =[];
defaultImageUrl='assets/img/noImage.png';

  constructor(private service:NewsService) { }

  ngOnInit(): void {
    this.service.sportsNews().subscribe(
      (response)=>{
        console.log(response);
         this.sports = response.articles;
      }
    )
  }

}
