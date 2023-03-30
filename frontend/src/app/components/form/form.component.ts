import {Component, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {PointService} from "../../services/point.service";
import {RadiusService} from "../../services/radius.service";
import {GraphComponent} from "../graph/graph.component";
import {FormGroup} from "@angular/forms";
import {ErrorService} from "../../services/error.service";



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  submitted = false;
  @ViewChild(GraphComponent) graphComponent:GraphComponent;
  @ViewChild("customNotification", { static: true }) customNotificationTmpl;
  private readonly notifier: ErrorService;
  xInputOnChange: boolean = false;
  yInputOnFocus: boolean = false;
  rInputOnChange: boolean = false;
  mainForm: FormGroup;

  constructor(private pointService: PointService, public radiusService: RadiusService) {
  }

  xValue: number = 0
  yValue: number = 0

  submit() {
    this.submitted = true;

    if (this.mainForm.invalid) {
      return;
    }

    let req = this.mainForm.value;
    req.y = req.y.replace(",", ".");
    this.updateAllValues();
    this.sendPoint(req);
  }

  getPoints() {
    this.pointService.getHits();

}

  sendPoint(data){
    this.pointService.addPoint(data).subscribe(resp => {
      if(resp.data.hit) {
        this.notifier.handle("Point is hit",)
      }else{
        this.notifier.handle("Point isn't hit")
      }
    }, err=>{
      this.notifier.handle("Have some problem")
    });
  }

  get f() { return this.mainForm.controls; }

  updateAllValues(){
    // if(this.f.x.value != null && this.f.y.value != null && this.f.r.value != null){
    this.graphComponent.XValue = this.f["x"].value;
    this.graphComponent.YValue = this.f["y"].value;
    this.graphComponent.rawRValue = this.f["r"].value;
    this.graphComponent.setCrossings();

  }

  valueXChange($event) {
    if (!$event.target.checked) return;
    this.xInputOnChange = true;

    this.updateAllValues();
  }

  valueYChange($event) {
    if(this.f["y"].invalid) return;

    this.updateAllValues();
  }

  valueRChange($event) {
    if (!$event.target.checked) return;
    this.rInputOnChange = true;

    this.updateAllValues();
  }






}
