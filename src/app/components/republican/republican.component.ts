import { Component, OnInit } from '@angular/core';
import { TwitterFeedsService } from 'src/app/services/twitter-feeds.service';
import { TwitterHandle } from 'src/app/models/TwitterHandle';

@Component({
  selector: 'app-republican',
  templateUrl: './republican.component.html',
  styleUrls: ['./republican.component.css']
})
export class RepublicanComponent implements OnInit {
  gopTwitterList: TwitterHandle[];

  constructor(private gopListService: TwitterFeedsService) { 
  }

  ngOnInit() {
    this.gopTwitterList = this.gopListService.getRepublicanFeeds();
    setTimeout(function() {
      (<any>window).twttr.widgets.load();
    }, 3000); 
  }

  goHomeUrl(homeUrl: string) {
    window.open(homeUrl, '_blank');
  }

}
