
import {Component, OnDestroy, OnInit} from '@angular/core';
import {GraphService} from "../../services/plot.service";
import {HitsService} from "../../services/point.service";
import {ValidationService} from "../../services/validation.service";

@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.scss']
})
export class PlotComponent implements OnInit, OnDestroy {

  constructor(private graphService: GraphService, private hitsService: HitsService,
              private validationService:ValidationService) {
  }

  // @ts-ignore
  draw = null

  ngOnDestroy(): void {
    // @ts-ignore
    clearInterval(this.draw)
  }

  xValue: string = ' '

  yValue: string = ' '

  ngOnInit(): void {
    this.graphService.graphCoords((x: string) => {
      this.xValue = x
    }, (y: string) => {
      this.yValue = y
    })
    // @ts-ignore
    document.getElementById("graph").addEventListener("click", () => {
      if (this.validationService.validateR()){
        this.hitsService.insertPoint(parseFloat(this.xValue), parseFloat(this.yValue)).subscribe()
        this.hitsService.getHits().subscribe()
        setTimeout(() => {
        }, 1000)
      }
    })

    const radiusObserver = new MutationObserver(() => {
      this.graphService.drawHits(this.hitsService.hits);
    })

    // @ts-ignore
    radiusObserver.observe(document.querySelector("#r-input"), {attributes: "aria-valuenow"})

    // @ts-ignore
    this.draw = setInterval(() => {
      this.hitsService.getHits().subscribe()
      this.graphService.drawHits(this.hitsService.hits)
    }, 1000)

  }

}
