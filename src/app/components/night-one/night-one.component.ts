import { Component, OnInit } from '@angular/core';
import { TwitterFeedsService } from 'src/app/services/twitter-feeds.service';
import { TwitterHandle } from 'src/app/models/TwitterHandle';

@Component({
  selector: 'app-night-one',
  templateUrl: './night-one.component.html',
  styleUrls: ['./night-one.component.css']
})
export class NightOneComponent implements OnInit {
  nightOneTwitterList: TwitterHandle[];

  constructor(private nightOneListService: TwitterFeedsService) { }

  ngOnInit() {
    this.nightOneTwitterList = this.nightOneListService.getField2020FirstNightFeeds();
    setTimeout(function() {
      (<any>window).twttr.widgets.load();
    }, 7000); 
  }

  goHomeUrl(homeUrl: string) {
    window.open(homeUrl, '_blank');
  }

}
