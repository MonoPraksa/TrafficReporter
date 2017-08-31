import { Component, Input, ElementRef } from '@angular/core';

import { CausesService } from './causes.service';
import { CommunicationService } from './communication.service';

import { Cause } from './causes';
import { FilterModel } from './filter.model'


@Component({
    selector: 'menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
  })

  export class MenuComponent{   // menu component shows available filters
 @Input() filterModel: FilterModel[] = [];

    constructor(private elementRef: ElementRef,
                private causesService: CausesService,
                private communicationService: CommunicationService
                ) {            
   this.waitingFunction(this);
                 }


  apply(){          // function that applies filters
    let filter=0;
    this.filterModel.forEach(data =>{// go trough all last filter models
      if(data.selected)              // if they are selected
      filter+=Number(data.id);       // add their value to filter
    });
    this.communicationService.setFilter(filter);           
    this.communicationService.menuStateHidden=true;                                 // hide the menu
    this.communicationService.activate(true);                                       // refresh markers on map
  }

  waitingFunction(selfRef):void{
    if(selfRef.causesService.causes){
        selfRef.causesService.causes.forEach(cause => {
          selfRef.filterModel[selfRef.filterModel.length]={id:cause.Id,name:cause.Name,selected: true};
        }); 
        selfRef.apply();
    }
    else{
      setTimeout(selfRef.waitingFunction,300,selfRef);
    }  
  }

  }
    