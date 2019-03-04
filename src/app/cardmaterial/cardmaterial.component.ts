import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Carddetails} from '../carddetails';
import {PeriodicElement} from '../model/PeriodicElement';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatSort} from '@angular/material';
import {DataService} from '../data.service';

@Component({
  selector: 'app-cardmaterial',
  templateUrl: './cardmaterial.component.html',
  styleUrls: ['./cardmaterial.component.css']
})




export class CardmaterialComponent implements OnInit {

  dataSource;
  displayedColumns = [];
  @ViewChild(MatSort) sort: MatSort;
  errorMessage ="";



  /**
   * Pre-defined columns list for user table
   */
  columnNames = [{
    id: "name",
    value: "Name"

  }, {
    id: "cardNumber",
    value: "Card Number"
  },
    {
      id: "balance",
      value: "Balance"
    },
    {
      id: "cardLimit",
      value: "Limit"
    }];

  cardDetailsForm = this.fb.group({
    name : ['', Validators.required],
    cardNumber  : ['', Validators.required],
    cardLimit : ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private data: DataService) { }

  ngOnInit() {
    this.displayedColumns = this.columnNames.map(x => x.id);
    this.fetchTable();
  }

  fetchTable() {

    this.data.getData().subscribe(tabledata => {
        let tableArr: Carddetails[] = tabledata;
        this.dataSource = new MatTableDataSource(tableArr);
        this.dataSource.sort = this.sort;
      }
    );


  }

  onSubmit(cardDetails: Carddetails) {

    this.data.saveCard(cardDetails)
      .subscribe(card => {
        this.fetchTable();
        this.errorMessage = "";
      }, error => {
        this.errorMessage = error;
        this.fetchTable();
      });
  }

  get name() { return this.cardDetailsForm.get('name'); }

  get cardnumber() { return this.cardDetailsForm.get('cardNumber'); }

  get limit() { return this.cardDetailsForm.get('cardLimit'); }

}


