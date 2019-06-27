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
        name: 'Real Donald J. Trump',
        page: 'republican',
        order: 1,
        url: 'https://twitter.com/realdonaldtrump',
        homeUrl: 'https://www.potus.com/'
      },
      {
        name: 'Republican Party',
        page: 'republican',
        order: 2,
        url: 'https://twitter.com/gop',
        homeUrl: 'https://www.potus.com/'
      },
      {
        name: 'Donald J. Trump',
        page: 'republican',
        order: 2,
        url: 'https://twitter.com/potus',
        homeUrl: 'https://www.potus.com/'
      },
      {
        name: 'Mitch McConnell',
        page: 'republican',
        order: 3,
        url: 'https://twitter.com/senatemajldr',
        homeUrl: 'https://www.mcconnell.senate.gov/public/'
      },
      {
        name: 'Kevin McCarthy',
        page: 'republican',
        order: 4,
        url: 'https://twitter.com/gopleader',
        homeUrl: 'https://kevinmccarthy.house.gov/'
      },
      {
        name: 'Alexandria Ocasio-Cortez',
        page: 'democratic',
        order: 1,
        url: 'https://twitter.com/aoc',
        homeUrl: 'https://ocasio-cortez.house.gov/'
      },
      {
        name: 'Democratic Party',
        page: 'democratic',
        order: 2,
        url: 'https://twitter.com/dnc',
        homeUrl: 'https://ocasio-cortez.house.gov/'
      },
      {
        name: 'Chuck Schumer',
        page: 'democratic',
        order: 3,
        url: 'https://twitter.com/senschumer',
        homeUrl: 'https://www.schumer.senate.gov/'
      },
      {
        name: 'Nancy Pelosi',
        page: 'democratic',
        order: 4,
        url: 'https://twitter.com/speakerpelosi',
        homeUrl: 'https://pelosi.house.gov/'
      },
      {
        name: 'Amy Klobuchar',
        page: 'field2020',
        night: 1,
        order: 1,
        url: 'https://twitter.com/amyklobuchar',
        homeUrl: 'https://amyklobuchar.com/'
      },
      {
        name: 'Joe Biden',
        page: 'field2020',
        night: 2,
        order: 2,
        url: 'https://twitter.com/joebiden',
        homeUrl: 'https://joebiden.com/'
      },
      {
        name: 'Bernie Sanders',
        page: 'field2020',
        night: 2,
        order: 3,
        url: 'https://twitter.com/berniesanders',
        homeUrl: 'https://berniesanders.com/'
      },
      {
        name: 'Elizabeth Warren',
        page: 'field2020',
        night: 1,
        order: 4,
        url: 'https://twitter.com/senwarren',
        homeUrl: 'https://elizabethwarren.com/'
      }, 
      {
        name: 'Julián Castro',
        page: 'field2020',
        night: 1,
        order: 5,
        url: 'https://twitter.com/juliancastro',
        homeUrl: 'https://www.juliancastro2020.com/'
      },
      {
        name: 'Tulsi Gabbard',
        page: 'field2020',
        night: 1,
        order: 6,
        url: 'https://twitter.com/tulsigabbard',
        homeUrl: 'https://www.tulsi2020.com/select'
      },
      {
        name: 'Kirsten Gillibrand',
        page: 'field2020',
        night: 2,
        order: 7,
        url: 'https://twitter.com/sengillibrand',
        homeUrl: 'https://kirstengillibrand.com/'
      },
      {
        name: "Beto O'Rourke",
        page: 'field2020',
        night: 1,
        order: 8,
        url: 'https://twitter.com/betoorourke',
        homeUrl: 'https://betoorourke.com/'
      },  
      {
        name: 'John Hickenlooper',
        page: 'field2020',
        night: 2,
        order: 9,
        url: 'https://twitter.com/hickenlooper',
        homeUrl: 'https://www.hickenlooper.com/'
      },
      {
        name: 'Jay Inslee',
        page: 'field2020',
        night: 1,
        order: 10,
        url: 'https://twitter.com/jayinslee',
        homeUrl: 'https://www.jayinslee.com/'
      },
      {
        name: 'Andrew Yang',
        page: 'field2020',
        night: 2,
        order: 11,
        url: 'https://twitter.com/andrewyang',
        homeUrl: 'https://www.yang2020.com/'
      },
      {
        name: 'Kamala Harris',
        page: 'field2020',
        night: 2,
        order: 12,
        url: 'https://twitter.com/kamalaharris',
        homeUrl: 'https://kamalaharris.org/'
      },
      {
        name: 'Pete Buttigieg',
        page: 'field2020',
        night: 2,
        order: 13,
        url: 'https://twitter.com/petebuttigieg',
        homeUrl: 'https://peteforamerica.com/'
      },
      {
        name: 'Marianne Williamson',
        page: 'field2020',
        night: 2,
        order: 14,
        url: 'https://twitter.com/marwilliamson',
        homeUrl: 'https://www.marianne2020.com/'
      },
      {
        name: 'John Delaney',
        page: 'field2020',
        night: 1,
        order: 15,
        url: 'https://twitter.com/johndelaney',
        homeUrl: 'https://www.johndelaney.com/'
      },
      {
        name: 'Wayne Messam',
        page: 'field2020',
        night: 0,
        order: 16,
        url: 'https://twitter.com/WayneMessam',
        homeUrl: ''
      }, 
      {
        name: 'Cory Booker',
        page: 'field2020',
        night: 1,
        order: 17,
        url: 'https://twitter.com/senbooker',
        homeUrl: 'https://corybooker.com/'
      },   
      {
        name: 'Seth Moulton',
        page: 'field2020',
        night: 0,
        order: 18,
        url: 'https://twitter.com/sethmoulton',
        homeUrl: 'https://sethmoulton.com/'
      }, 
      {
        name: 'Tim Ryan',
        page: 'field2020',
        night: 1,
        order: 19,
        url: 'https://twitter.com/reptimryan',
        homeUrl: 'https://timryanforamerica.com'
      }, 
      {
        name: 'Eric Swalwell',
        page: 'field2020',
        night: 2,
        order: 20,
        url: 'https://twitter.com/ericswalwell',
        homeUrl: 'https://ericswalwell.com/'
      }, 
      {
        name: 'Bill de Blasio',
        page: 'field2020',
        night: 1,
        order: 21,
        url: 'https://twitter.com/billdeblasio',
        homeUrl: ''
      }, 
      {
        name: 'Michael Bennet',
        page: 'field2020',
        night: 2,
        order: 23,
        url: 'https://twitter.com/michaelbennet',
        homeUrl: 'https://michaelbennet.com/'
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

   getField2020FirstNightFeeds(): TwitterHandle[] { 
    
    this.filteredTwitterFeeds = this.allTwitterFeeds.filter(r => r.page === "field2020" && r.night === 1);
    
    this.rankedTwitterFeeds = this.sortByKey(this.filteredTwitterFeeds, 'order');

     return this.rankedTwitterFeeds;
   }

   getField2020SecondNightFeeds(): TwitterHandle[] { 
    
    this.filteredTwitterFeeds = this.allTwitterFeeds.filter(r => r.page === "field2020" && r.night === 2);
    
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

