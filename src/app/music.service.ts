import { Injectable }      from '@angular/core';
import { Http, Response, Headers, RequestOptions }  from '@angular/http';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/operator/toPromise';


@Injectable()
export class MusicService{

    private _url = 'http://104.197.128.152:8000/v1';
    constructor(private _http:Http){}
    
    //Tracks Services
    getTracks(paramObj?){
        var url = this._url+'/tracks';
        return this.getResult(url,paramObj);
    }
    getTrack(id){
        var url = this._url+'/tracks/'+id;
        return this.getResult(url);
    }
    addTrack(track){
        var url = this._url+'/tracks';
        return this.postResult(url,track);
    }
    updateTrack(track){
        var url = this._url+'/tracks/'+track.id;
        return this.postResult(url,track);
    }

    //Genres Services
    getGenres(paramObj?){
        var url = this._url+'/genres';
        return this.getResult(url,paramObj);
    }
    getGenre(id){
        var url = this._url+'/genres/'+id;
        return this.getResult(url);
    }
    addGenre(genre){
        var url = this._url+'/genres';
        return this.postResult(url,genre);
    }
    updateGenre(genre){
        var url = this._url+'/genres/'+genre.id;
        return this.postResult(url,genre);
    }


    /**
     * @url: string: Api End point
     * @paramObj:object for query string
     * @return Promise
     * This function handles all get requests to the server
     */
   private getResult(url,paramObj?){
        if(paramObj)
        {
            url += '?'+this.serializeObj(paramObj);
        }
        
        let response = this._http.get(url)
                    .map(res=>res.json())
                    .catch(this.handleError)
                    .toPromise();
                   return response;
    }

    /**
     * @url: string: Api End point
     * @paramObj:object for query string
     * @return Promise
     * This function handles all post requests to the server
     */
    private postResult(url,data){
        let response = this._http.post(url,data)
                    .map(res=>res.json())
                    .catch(this.handleError)
                    .toPromise();
                   return response;
    }

     /**
     * @obj: object for query string
     * This function returns a url encoded query string responsible for requesting data from server 
     */
    private serializeObj(obj) {
        let param = "";
        for (var property in obj)
            param +=encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]);
        return param;
    }
    /**
     * This function handles error thrown when getting data from server 
     */
    private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
        errMsg = error.message ? error.message : error.toString();
        }
        return Observable.throw(errMsg);
    }

}