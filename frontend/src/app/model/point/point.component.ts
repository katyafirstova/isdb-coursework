import { Component } from '@angular/core';

@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.scss']
})
export class PointComponent {

  id!: number;
  result!: boolean;
  x!: number;
  y!: number;
  r!: number;

}
