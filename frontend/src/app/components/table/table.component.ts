
import {Component, OnInit} from '@angular/core';
import {HitsService} from "../../services/point.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{

  constructor(public hitsService: HitsService) {
  }

  ngOnInit(): void {
    this.hitsService.getHits().subscribe()
  }


  previousPage(){
    if ( this.hitsService.currentPage > 1){
      this.hitsService.currentPage -= 1
      this.hitsService.getHits().subscribe()
    }
  }

  nextPage(){
    if ( this.hitsService.currentPage < this.hitsService.pagesCount){
      this.hitsService.currentPage += 1
      this.hitsService.getHits().subscribe()
    }
  }

  toLastPage(){
    this.hitsService.currentPage = this.hitsService.pagesCount
    this.hitsService.getHits().subscribe()
  }

}
