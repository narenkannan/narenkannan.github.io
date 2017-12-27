import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {
    constructor(private http: Http) { }
    baseUrl: string = "https://webpagecrawler.herokuapp.com/";
    preloader: boolean = false;
    error: boolean = false;
    errMsg: any;

    getJson(url: string): Promise<any> {
        this.preloader = true;
        this.error = false;
        let parent = this;
        return this.http.get(this.baseUrl + url.replace('://', '/')).toPromise().then(function (response) {
            parent.preloader = false;
            return response.json();
        }).catch(function (ex) {
            console.log(ex);
            parent.preloader = false;
            parent.error = true;
        });
    }
}