import { Component, OnInit } from '@angular/core';
import { TwitterFeedsService } from 'src/app/services/twitter-feeds.service';
import { TwitterHandle } from 'src/app/models/TwitterHandle';

@Component({
  selector: 'app-democrat',
  templateUrl: './democrat.component.html',
  styleUrls: ['./democrat.component.css']
})
export class DemocratComponent implements OnInit {
  private twitter: any;
  private dncTwitterList: TwitterHandle[];

  constructor(private dncListService: TwitterFeedsService) { 
  }

  ngOnInit() {
    this.dncTwitterList = this.dncListService.getDemocraticFeeds();
    setTimeout(function() {
      (<any>window).twttr.widgets.load();
    }, 3000); 
  }


}
