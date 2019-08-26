import { IShowsService } from "./shows.service";
import { ICurrentShow } from "../icurrent-show";
import { of } from "rxjs";

export class ShowsServiceFake implements IShowsService {
  private fakeShow: ICurrentShow = {
    showName: "game",
    showTime: "18:00",
    showDate: "Sunday",
    showNetwork: "CineMax",
    showDuration: "60",
    showSummary: "<p>THis is game show</p>",
    showImage: "",
    showGenres: "Romance, Comedy",
    showCountry: "US"
  };

  public getShowData(search: string) {
    return of(this.fakeShow);
  }
}
