import { TestBed } from "@angular/core/testing";

import { ShowsService } from "./shows.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("ShowsService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it("should be created", () => {
    const service: ShowsService = TestBed.get(ShowsService);
    expect(service).toBeTruthy();
  });
});
