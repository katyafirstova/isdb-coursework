import {Injectable} from '@angular/core';
import {BehaviorSubject, delay, Observable, retry, tap} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {RadiusService} from "./radius.service";
import {PointResponse} from "../model/point-response.component";
import {Point} from "../model/point.component";
// import {GraphService} from "./graph.service";


const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};



@Injectable({
    providedIn: 'root'
})
export class PointService {

    public points: BehaviorSubject<Point[]> = new BehaviorSubject<Point[]>([]);


    constructor(private http: HttpClient, private radiusService: RadiusService) {
    }


    private r = 1;
    public setR(r) {
        this.r = r;
    }

    public getR() {
        return this.r;
    }

    private getHeaders(): HttpHeaders {
        // const token: string = localStorage.getItem('authToken');

        const headers = new HttpHeaders();

        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');

        return headers;
    }

    public getHits() {
        /**/
        this.http.get('api/points/getPoints', { headers: this.getHeaders()}).subscribe(data => {
            /*обновление значений внутри регистратора слушателей*/
            this.points.next(data as Point[]);
            console.log('points got');

        }, (err: HttpErrorResponse) => {
            /*неккоректный token*/
            if (err.status == 401 || err.status == 403 ) {
                // this.authService.logOut();
            }
        });
    }

    public addPoint(x : number, y : number) {
        return this.http.post<string>("api/points/insert", {
            x: x,
            y: y,
            r: this.radiusService.rValue,
        }).pipe(
            delay(500),
            retry(2)
        )
    }



    removePoints(): Observable<any> {
        return this.http.delete('api/points/clear', httpOptions);
    }




}
