import { Component, OnInit } from '@angular/core';
import { TwitterFeedsService } from 'src/app/services/twitter-feeds.service';
import { TwitterHandle } from 'src/app/models/TwitterHandle';

@Component({
  selector: 'app-night-two',
  templateUrl: './night-two.component.html',
  styleUrls: ['./night-two.component.css']
})
export class NightTwoComponent implements OnInit {
  nightTwoTwitterList: TwitterHandle[];

  constructor(private nightTwoListService: TwitterFeedsService) { }

  ngOnInit() {
    this.nightTwoTwitterList = this.nightTwoListService.getField2020SecondNightFeeds();
    setTimeout(function() {
      (<any>window).twttr.widgets.load();
    }, 7000); 
  }

  goHomeUrl(homeUrl: string) {
    window.open(homeUrl, '_blank');
  }

}
