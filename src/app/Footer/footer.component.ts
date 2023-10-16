import {Component} from '@angular/core';

@Component({
    selector : 'b-footer',
    templateUrl : './footer.component.html',
})
export class Footer{
    footerData : any[] = [
        {
            heading : "Features",
            text : ["Cool stuff","Random feature","Team feature","Stuff for developers","Another one","Last time"],
        },
        {
            heading : "Resources",
            text : ["Resource","Resource name","Another resource","Final resource"],
        },
        {
            heading : "About",
            text : ["Team","Locations","Privacy","Terms"],
        },
    ]
}