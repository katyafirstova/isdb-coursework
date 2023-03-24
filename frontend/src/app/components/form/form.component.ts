import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {HitsService} from "../../services/point.service";
import {ValidationService} from "../../services/validation.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  constructor(private hitsService: HitsService, public radiusService: ValidationService) {
  }

  xValue: number = 0
  yValue: number = 0

  submit() {
    if (this.validateX() && this.radiusService.validateR()) {
      this.hitsService.insertPoint(this.xValue, this.yValue).subscribe()
      setTimeout(() => {
        this.hitsService.getHits().subscribe()
        this.hitsService.currentPage = this.hitsService.pagesCount
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
