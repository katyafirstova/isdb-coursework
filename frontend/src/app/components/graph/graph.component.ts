import {Component, OnDestroy, OnInit} from '@angular/core';
import {GraphService} from "../../services/graph.service";
import {RadiusService} from "../../services/radius.service";
import {PointService} from "../../services/point.service";

@Component({
    selector: 'app-graph',
    templateUrl: './graph.component.html',
    styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit, OnDestroy {

    constructor(private graphService: GraphService, private pointService: PointService, private radiusService: RadiusService) {
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
            if (this.radiusService.validateR()) {
                this.pointService.addPoint(parseFloat(this.xValue), parseFloat(this.yValue)).subscribe()
                this.pointService.getHits()
                setTimeout(() => {
                    // this.hitsService.getPagesCount().subscribe()
                }, 1000)
            }
        });
    }
}

// }
//
//
//         const radiusObserver = new MutationObserver(() => {
//             this.graphService.drawHits(this.hitsService.points);
//         })
//
//         // @ts-ignore
//         radiusObserver.observe(document.querySelector("#r-input"), {attributes: "aria-valuenow"})
//
//         // @ts-ignore
//         this.draw = setInterval(() => {
//             this.pointService.getHits().subscribe()
//             this.pointService.drawHits(this.pointService.points)
//         }, 1000)
//
//     }
// }


