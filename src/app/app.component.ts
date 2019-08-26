import { Component } from '@angular/core';
import { ICurrentShow } from './icurrent-show';
import { ShowsService } from './shows/shows.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TvShows';

  currentShow: ICurrentShow;

  constructor (private showsService: ShowsService){}

  doSearch(searchValue) {
     const userInput = searchValue;
    this.showsService.getShowData(userInput).subscribe(data => this.currentShow = data);
  }
}

