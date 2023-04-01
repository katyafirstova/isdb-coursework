import {Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {PointService} from "../../services/point.service";
import {RadiusService} from "../../services/radius.service";
import {FormGroup} from "@angular/forms";
import {ErrorService} from "../../services/error.service";
import {Point} from "../../model/point.component";
import {HttpErrorResponse} from "@angular/common/http";


@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit  {



    @ViewChild('canvas')
    canvas: ElementRef;


    ngOnInit() {


    }

    xValue: number = 0
    yValue: number = 0

    constructor(private pointService: PointService, public radiusService: RadiusService) {
    }

    addPoint() {
        if (this.validateX() && this.radiusService.validateR() && this.validateY()) {
            this.pointService.addPoint(this.xValue, this.yValue).subscribe()
            setTimeout(() => {
                this.pointService.getHits()
            }, 1000)
        }
    }


    validateY() {
        if (this.yValue == null) {
            const error = document.getElementById("y-value-error")
            // @ts-ignore
            error.innerText = "cannot be empty"
            setTimeout(() => {
                // @ts-ignore
                error.innerText = ""
            }, 2000)
            return false
        } else if (this.yValue > 3 || this.yValue < -3) {
            const error = document.getElementById("y-value-error")
            // @ts-ignore
            error.innerText = "should be between -3 and 3"
            setTimeout(() => {
                // @ts-ignore
                error.innerText = ""
            }, 2000)
            return false
        } else if (this.yValue.toString().length > 4) {
            const error = document.getElementById("y-value-error")
            // @ts-ignore
            error.innerText = "no more than 4 symbols"
            setTimeout(() => {
                // @ts-ignore
                error.innerText = ""
            }, 2000)
            return false
        }
        return true
    }


    validateX(): boolean {
        if (this.xValue == null) {
            const error = document.getElementById("x-value-error")
            // @ts-ignore
            error.innerText = "cannot be empty"
            setTimeout(() => {
                // @ts-ignore
                error.innerText = ""
            }, 2000)
            return false
        } else if (this.xValue > 3 || this.xValue < -3) {
            const error = document.getElementById("x-value-error")
            // @ts-ignore
            error.innerText = "should be between -3 and 3"
            setTimeout(() => {
                // @ts-ignore
                error.innerText = ""
            }, 2000)
            return false
        } else if (this.xValue.toString().length > 4) {
            const error = document.getElementById("x-value-error")
            // @ts-ignore
            error.innerText = "no more than 4 symbols"
            setTimeout(() => {
                // @ts-ignore
                error.innerText = ""
            }, 2000)
            return false
        }
        return true
    }

    isDesktopDisplay() {
        return document.body.clientWidth >= 1000;
    }




}
