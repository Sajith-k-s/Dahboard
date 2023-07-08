import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent  implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: any;

  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}


export interface PeriodicElement {
  name: string;
  id: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Aju',  symbol: 'MEARN'},
  {id: 2, name: 'Manu', symbol: 'MEARN'},
  {id: 3, name: 'Ravi', symbol: 'BIG DATA'},
  {id: 4, name: 'Raju',  symbol: 'SOFTWARE TESTING'},
  {id: 5, name: 'Ram',  symbol: 'MEARN'},
  {id: 6, name: 'Carbon',  symbol: 'PYTHON'},
  {id: 7, name: 'Nitrogen',  symbol: '.NET'},
  {id: 8, name: 'Oxygen',  symbol: '.NET'},

];