import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../service/news.service';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.scss']
})
export class HeadlinesComponent implements OnInit {
  headlines:any = '';
  defaultImageUrl='assets/img/noImage.png'
  constructor(private service:NewsService) { }

  ngOnInit(): void {
    this.service.headlines().subscribe(
      (response)=>{
         this.headlines=response.articles;

        //console.log(response);
      }
    )
  }

}
