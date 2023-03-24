import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPoint} from "../models/point"
import {delay, retry, tap} from "rxjs";
import {IPointsResponse} from "../models/point-response";
import {ValidationService} from "./validation.service";
import {GraphService} from "./plot.service";


@Injectable({
  providedIn: 'root'
})
export class HitsService {

  constructor(private http: HttpClient, private  validationService:  ValidationService, private graphService: GraphService) {
  }

  hits: IPoint[] = []
  pagesCount: number = 1
  currentPage = 1


  getHits() {
    const offset = Intl.DateTimeFormat().resolvedOptions().timeZone
    return this.http.post<IPointsResponse>("/api/points/getPoints", {
      page: this.currentPage,
      offset: offset
    }).pipe(
      retry(2),
      tap(hits => {
        this.hits = hits.data
        this.hits.reverse()
        this.graphService.drawHits(this.hits)
      })
    )
  }


  insertPoint(x: number, y: number) {
    const offset = Intl.DateTimeFormat().resolvedOptions().timeZone
    return this.http.post<string>("api/hits/insert", {
      x: x,
      y: y,
      r: this.validationService.rValue,
      offset: offset
    }).pipe(
      delay(500),
      retry(2)
    )
  }

}
