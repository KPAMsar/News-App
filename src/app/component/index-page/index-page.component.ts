import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../service/news.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit {

 news:any = [];
 defaultImageUrl = "https://www.canva.com/design/DAFC3eLMyzs/mXiXtRZwsiG18xgRCIvTAg/view?utm_content=DAFC3eLMyzs&utm_campaign=share_your_design&utm_medium=link&utm_source=shareyourdesignpanel";

  constructor(private service:NewsService) { }

  ngOnInit(): void {
    this.service.headlines().subscribe(
      (response) =>{
        // console.log(response);
        this.news = response.articles;
        this.defaultImageUrl='assets/img/noImage.png'
      }

    )
  }



}
