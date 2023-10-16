import {Component , Input,OnInit} from '@angular/core';

@Component({
selector : 'b-card',
templateUrl : './card.component.html'
})
export class Card{
    @Input() data : any = {};
}