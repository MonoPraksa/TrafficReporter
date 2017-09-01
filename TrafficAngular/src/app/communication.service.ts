import { Injectable }    from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class CommunicationService {          // the point of communication service is to facilitate data transfer between independent components

  private activator = new Subject<boolean>(); 
  activator$ = this.activator.asObservable();
  activate(data: boolean) {
    this.activator.next(data);
  }

  private directions = new Subject<any>();
  directions$ = this.directions.asObservable();
  sendDirections(data: any){
    this.directions.next(data);
  }

  private clearRoute = new Subject<boolean>();
  clearRoute$ = this.clearRoute.asObservable();
  clearDirections(data: boolean){
    this.clearRoute.next(data);
  }

  private bounds = new Subject<any>();
  bounds$= this.bounds.asObservable();
  setBounds(data: any){
    this.bounds.next(data);
  }

  public directionsStateHidden: boolean = true;
  public directionsStateInUse: boolean = false;
  public menuStateHidden: boolean = true;
  public geolocationDenied: boolean = false;

  private filter = new Subject<number>();
  filter$ = this.filter.asObservable();
  setFilter(data: number){
    this.filter.next(data);
  }

  }
