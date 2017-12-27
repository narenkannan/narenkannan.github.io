//our root app component
import { Component, NgModule, VERSION } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrettyJsonModule } from 'angular2-prettyjson';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppService } from './app.service';
import { HttpModule, Response } from '@angular/http';

@Component({
  selector: 'my-app',
  templateUrl: 'src/app.html',
  providers: [AppService]
})
export class App {

  searchText: string = 'http://sample.com';
  jsonData: {any};

  objObject = Object;

  url1: any;


  actualValue: any;

  searchlist: string = '';

  constructor(private appService: AppService) { }

  search(value) {
    this.appService.preloader = true;
    this.actualValue = value;
    this.searchlist = 'searchlist';
    this.loadJsonData();

  }
  loadJsonData() {
    if (!this.searchText.toLowerCase().startsWith("http"))
      this.searchText = "http://" + this.searchText
    let parent = this;
    this.appService.getJson(this.searchText).toPromise().then(function (response) {
      parent.appService.preloader = false;
      // console.log(response.json());
      parent.jsonData = response.json();
      // return response.json()
    }).catch(function (ex) {
      console.log(ex);
      parent.appService.errMsg = ex;
      parent.appService.preloader = false;
      parent.appService.error = true;
      parent.jsonData = undefined;
    });
  }


}



@NgModule({
  imports: [FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    PrettyJsonModule,
    HttpModule
  ],
  declarations: [App],
  bootstrap: [App]
})
export class AppModule { }