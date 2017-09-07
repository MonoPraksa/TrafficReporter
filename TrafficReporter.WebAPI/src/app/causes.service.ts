import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Cause } from './causes';
import { WebApi } from './api.service';

@Injectable()
export class CausesService {
  public causes: Cause[];
  
  private Url = WebApi.API_ENDPOINT+ 'Causes';  // URL to web api
  
  constructor(private http: Http) {
    let selfRef = this;
    this.getCauses()
    .then(data =>{   
      selfRef.causes = data;
      for(let i = 0; i<selfRef.causes.length;i++)
        {
          selfRef.getDataUri('./assets/images/'+selfRef.causes[i].Id+'.png', function(dataUri) {
            selfRef.causes[i].IconUri=dataUri;
        });
        }
    });
   
   }

  getCauses(): Promise<Cause[]> {
    return this.http.get(this.Url)
               .toPromise()
               .then(response => response.json() as Cause[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

   getDataUri(url, callback) {
    var image = new Image();

    image.onload = function () {
        var canvas = document.createElement('canvas');
        canvas.width = 48; // or 'width' if you want a special/scaled size
        canvas.height = 48; // or 'height' if you want a special/scaled size

        canvas.getContext('2d').drawImage(image, 0, 0);

        // ... or get as Data URI
        callback(canvas.toDataURL('image/png'));
    };

    image.src = url;
}

// Usage


}