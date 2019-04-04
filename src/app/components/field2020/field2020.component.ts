import { Component, OnInit } from '@angular/core';
import { TwitterFeedsService } from 'src/app/services/twitter-feeds.service';
import { TwitterHandle } from 'src/app/models/TwitterHandle';

@Component({
  selector: 'app-field2020',
  templateUrl: './field2020.component.html',
  styleUrls: ['./field2020.component.css']
})
export class Field2020Component implements OnInit {
  private field2020TwitterList: TwitterHandle[];

  constructor(private field2020ListService: TwitterFeedsService) { }

  ngOnInit() {
    this.field2020TwitterList = this.field2020ListService.getField2020Feeds();
    setTimeout(function() {
      (<any>window).twttr.widgets.load();
    }, 15000); 
  }

}
