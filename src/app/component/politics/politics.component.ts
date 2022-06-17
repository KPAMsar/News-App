import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../service/news.service';

@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.scss']
})
export class PoliticsComponent implements OnInit {
politics:any = '';
defaultImageUrl='assets/img/noImage.png';
  constructor(private service:NewsService) { }

  ngOnInit(): void {
    this.service.politics().subscribe(
      (res) =>{
        this.politics = (res as any).results;
         console.log(res);
      }
    )

  }

}
