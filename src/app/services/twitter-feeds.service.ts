import { Injectable } from '@angular/core';
import { TwitterHandle } from 'src/app/models/TwitterHandle';

@Injectable({
  providedIn: 'root'
})
export class TwitterFeedsService {
  allTwitterFeeds: TwitterHandle[];
  filteredTwitterFeeds: TwitterHandle[];
  rankedTwitterFeeds: TwitterHandle[];

  constructor() { 
    this.allTwitterFeeds = [
      {
        name: 'Republican Party',
        page: 'republican',
        order: 1,
        url: 'https://twitter.com/gop'
      },
      {
        name: 'Donald J. Trump',
        page: 'republican',
        order: 2,
        url: 'https://twitter.com/potus'
      },
      {
        name: 'Mitch McConnell',
        page: 'republican',
        order: 3,
        url: 'https://twitter.com/senatemajldr'
      },
      {
        name: 'Kevin McCarthy',
        page: 'republican',
        order: 4,
        url: 'https://twitter.com/gopleader'
      },
      {
        name: 'Democratic Party',
        page: 'democratic',
        order: 1,
        url: 'https://twitter.com/dnc'
      },
      {
        name: 'Chuck Schumer',
        page: 'democratic',
        order: 2,
        url: 'https://twitter.com/senschumer'
      },
      {
        name: 'Nancy Pelosi',
        page: 'democratic',
        order: 3,
        url: 'https://twitter.com/speakerpelosi'
      },
      {
        name: 'Alexandria Ocasio-Cortez',
        page: 'democratic',
        order: 4,
        url: 'https://twitter.com/aoc'
      },
      {
        name: 'Amy Klobuchar',
        page: 'field2020',
        order: 1,
        url: 'https://twitter.com/amyklobuchar'
      },
      {
        name: 'Joe Biden',
        page: 'field2020',
        order: 2,
        url: 'https://twitter.com/joebiden'
      },
      {
        name: 'Bernie Sanders',
        page: 'field2020',
        order: 3,
        url: 'https://twitter.com/berniesanders'
      },
      {
        name: 'Elizabeth Warren',
        page: 'field2020',
        order: 4,
        url: 'https://twitter.com/senwarren'
      }, 
      {
        name: 'Julián Castro',
        page: 'field2020',
        order: 5,
        url: 'https://twitter.com/juliancastro'
      },
      {
        name: 'Tulsi Gabbard',
        page: 'field2020',
        order: 6,
        url: 'https://twitter.com/tulsigabbard'
      },
      {
        name: 'Kirsten Gillibrand',
        page: 'field2020',
        order: 7,
        url: 'https://twitter.com/sengillibrand'
      },
      {
        name: "Beto O'Rourke",
        page: 'field2020',
        order: 8,
        url: 'https://twitter.com/betoorourke'
      },  
      {
        name: 'John Hickenlooper',
        page: 'field2020',
        order: 9,
        url: 'https://twitter.com/hickenlooper'
      },
      {
        name: 'Jay Inslee',
        page: 'field2020',
        order: 10,
        url: 'https://twitter.com/jayinslee'
      },
      {
        name: 'Andrew Yang',
        page: 'field2020',
        order: 11,
        url: 'https://twitter.com/andrewyang'
      },
      {
        name: 'Kamala Harris',
        page: 'field2020',
        order: 12,
        url: 'https://twitter.com/kamalaharris'
      },
      {
        name: 'Pete Buttigieg',
        page: 'field2020',
        order: 13,
        url: 'https://twitter.com/petebuttigieg'
      },
      {
        name: 'Marianne Williamson',
        page: 'field2020',
        order: 14,
        url: 'https://twitter.com/marwilliamson'
      },
      {
        name: 'John Delaney',
        page: 'field2020',
        order: 15,
        url: 'https://twitter.com/johndelaney'
      },
      {
        name: 'Wayne Messam',
        page: 'field2020',
        order: 16,
        url: 'https://twitter.com/WayneMessam'
      }, 
      {
        name: 'Cory Booker',
        page: 'field2020',
        order: 17,
        url: 'https://twitter.com/senbooker'
      },   
      {
        name: 'Seth Moulton',
        page: 'field2020',
        order: 18,
        url: 'https://twitter.com/sethmoulton'
      }, 
      {
        name: 'Tim Ryan',
        page: 'field2020',
        order: 19,
        url: 'https://twitter.com/reptimryan'
      }, 
      {
        name: 'Eric Swalwell',
        page: 'field2020',
        order: 20,
        url: 'https://twitter.com/ericswalwell'
      } 
    ]
  }

  getRepublicanFeeds(): TwitterHandle[] { 
    
    this.filteredTwitterFeeds = this.allTwitterFeeds.filter(r => r.page === "republican");
    
    this.rankedTwitterFeeds = this.sortByKey(this.filteredTwitterFeeds, 'order');

     return this.rankedTwitterFeeds;
   }

   getDemocraticFeeds(): TwitterHandle[] { 
    
    this.filteredTwitterFeeds = this.allTwitterFeeds.filter(r => r.page === "democratic");
    
    this.rankedTwitterFeeds = this.sortByKey(this.filteredTwitterFeeds, 'order');

     return this.rankedTwitterFeeds;
   }

   getField2020Feeds(): TwitterHandle[] { 
    
    this.filteredTwitterFeeds = this.allTwitterFeeds.filter(r => r.page === "field2020");
    
    this.rankedTwitterFeeds = this.sortByKey(this.filteredTwitterFeeds, 'order');

     return this.rankedTwitterFeeds;
   }

   sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }

}

