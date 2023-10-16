import {Component} from '@angular/core';
@Component({
    selector : 'b-plans',
    templateUrl : './plans.component.html'
})
export class Plans{
    tableData : any[] = [{
        text : "Public",
        free : true,
        pro : true,
        enterprise : true,
    },
    {
        text : "Private",
        free : false,
        pro : true,
        enterprise : true,
    },
    {
        text : "Permissions",
        free : true,
        pro : true,
        enterprise : true,
    },
    {
        text : "Sharing",
        free : false,
        pro : true,
        enterprise : true,
    },
    {
        text : "Unlimited members",
        free : false,
        pro : true,
        enterprise : true,
    },
    {
        text : "Extra security",
        free : false,
        pro : false,
        enterprise : true,
    },
]
}