import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {PointService} from "../../services/point.service/point.service";
import {RadiusService} from "../../services/radius.service/radius.service";

@Component({
  selector: 'app-input-area',
  templateUrl: './input-area.component.html',
  styleUrls: ['./input-area.component.scss']
})
export class FormComponent {

  constructor(private pointService: PointService, public radiusService: RadiusService) {
  }

  xValue: number = 0
  yValue: number = 0

  submit() {
    if (this.validateX() && this.radiusService.validateR()) {
      this.pointService.applyHit(this.xValue, this.yValue).subscribe()
      setTimeout(() => {
        this.pointService.getHits().subscribe()
      }, 1000)
    }
  }

  validateX(): boolean {
    if (this.xValue == null){
      const error = document.getElementById("x-value-error")
      // @ts-ignore
      error.innerText = "X cannot be empty"
      setTimeout(() => {
        // @ts-ignore
        error.innerText = ""
      }, 2000)
      return false
    }
    else if (this.xValue > 3 || this.xValue < -3) {
      const error = document.getElementById("x-value-error")
      // @ts-ignore
      error.innerText = "X should be between -3 and 3"
      setTimeout(() => {
        // @ts-ignore
        error.innerText = ""
      }, 2000)
      return false
    } else if (this.xValue.toString().length > 4) {
      const error = document.getElementById("x-value-error")
      // @ts-ignore
      error.innerText = "No more than 4 symbols"
      setTimeout(() => {
        // @ts-ignore
        error.innerText = ""
      }, 2000)
      return false
    }
    return true
  }


}
