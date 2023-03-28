import {Component, Injectable} from '@angular/core';
import {delay, retry, tap} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {RadiusService} from "../radius.service/radius.service";
import {PointComponent} from "../../model/point/point.component";
import {PointResponse} from "../../model/point-response/point-response.component";

@Component({
  selector: 'app-point.service',
  templateUrl: './point.service.html',
  styleUrls: ['./point.service.scss']
})

@Injectable({
  providedIn: 'root'
})
export class PointService {


  constructor(private http: HttpClient, private radiusService: RadiusService) {
  }

  points: PointComponent[] = []
  pagesCount: number = 1
  currentPage = 1


  getHits() {
    const offset = Intl.DateTimeFormat().resolvedOptions().timeZone
    return this.http.post<PointResponse>("/api/points/getPoints", {
      page: this.currentPage,
      offset: offset
    }).pipe(
        retry(2),
        tap(hits => {
          this.points = hits.data
          this.points.reverse()
          // this.graphService.drawHits(this.hits)
        })
    )
  }

  applyHit(x: number, y: number) {
    const offset = Intl.DateTimeFormat().resolvedOptions().timeZone
    return this.http.post<string>("api/points/insertPoint", {
      x: x,
      y: y,
      r: this.radiusService.rValue,
      offset: offset
    }).pipe(
        delay(500),
        retry(2)
    )
  }

}
