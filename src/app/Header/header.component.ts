import { Component } from "@angular/core";

@Component({
    selector : 'b-header',
    templateUrl : './header.component.html',
})
export class Header{
    navBarOptions : string[]= ["Features","Enterprise","Support","Pricing"]
}