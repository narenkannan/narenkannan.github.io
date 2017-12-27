import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {
    constructor(private http: Http) { }
    baseUrl: string = "http://10.100.8.58";
    // https://webpagecrawler.herokuapp.com/
    preloader: boolean = false;
    error: boolean = false;
    errMsg: any;

    getJson(url: string): any {
        this.preloader = true;
        this.error = false;
        this.errMsg = '';
        let parent = this;
        console.log(this.baseUrl);
        console.log(url);


        // let options: RequestOptionsArgs = { headers: new Headers() };
        // options.headers.set("Content-type", "application/x-www-form-urlencoded");
        let params: URLSearchParams = new URLSearchParams();
        params.set("url", url);
        return this.http.post(this.baseUrl, params);/*.toPromise().then(function (response) {
            parent.preloader = false;
            console.log(response.json());
            return response.json();
            // return response.json()
        }).catch(function (ex) {
            console.log(ex);
            parent.errMsg = ex;
            parent.preloader = false;
            parent.error = true;
            // return undefined;
        });*/
    }
}