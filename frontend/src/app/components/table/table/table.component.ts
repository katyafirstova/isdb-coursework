import {Component, OnInit} from '@angular/core';
import {PointService} from "../../../services/point.service";
import {AuthService} from "../../../services/auth.service";
import {Point} from "../../../model/point.component";
import {HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
    public points: Point[];

    constructor(private service: PointService) { }
    ngOnInit() {
        this.service.points.subscribe(value => this.points = value);
        this.service.getHits();
    }
}
