import {Component} from '@angular/core';

@Component({
    selector : 'b-hero',
    templateUrl : './hero.component.html'
})
export class HeroComponent{
    cards : any[]= [{
        heading : {
            text : "Free",
            highlight : false,
        },
        price : "$0",
        features : ["10 users included","2GB of storage","Email support","Help center access"],
        button : {
            text : "Sign up for free",
            highlight : false,
        }
    },
    {
        heading : {
            text : "Pro",
            highlight : false,
        },
        price : "$15",
        features : ["20 users included","10GB of storage","Priority email support","Help center access"],
        button : {
            text : "Get started",
            highlight : true,
        }
    },
    {
        heading : {
            text : "Enterprise",
            highlight : true,
        },
        price : "$29",
        features : ["30 users included","15GB of storage","Phone and email support","Help center access"],
        button : {
            text : "Contact us",
            highlight : true,
        }
    }
]
}