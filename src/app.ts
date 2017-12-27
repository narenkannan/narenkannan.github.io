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

  searchText: string = '';
  jsonData: any;

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

    this.jsonData = this.appService.getJson(this.searchText);
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