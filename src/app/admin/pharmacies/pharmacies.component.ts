import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { AddPharmacyComponent } from './add-pharmacy/add-pharmacy.component';

@Component({
  selector: 'app-pharmacies',
  templateUrl: './pharmacies.component.html',
  styleUrls: ['./pharmacies.component.scss']
})
export class PharmaciesComponent implements OnInit {

  tableList: any;

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;

filterToggle: boolean;

public searchText: string;
public page: any;
public settings: Settings;
constructor(public appSettings: AppSettings,
  public dialog: MatDialog) {
  this.settings = this.appSettings.settings;
}

ngOnInit() {
  this.tableList = [  
    {id:1 , pharmacy:"CVS Pharmacy" , location:"Houston" , partner:"Fabrice Vanegas" , email:"fabrice@cvspharma.com" , phone:"408-444-0058", status:true },
    {id:2 , pharmacy:"Casa De Amigos Clinic Pharmacy" , location:"Sugar Land" , partner:"Stephen McGill" , email:"Stephen@deamigos.com" , phone:"127-256-5528", status:true },
    {id:3 , pharmacy:"Walgreens Pharmacy" , location:"West Houston" , partner:"Otto Rieder" , email:"Rieder@walgreens.com" , phone:"647-210-9935", status:false },
    {id:4 , pharmacy:"Canal Pharmacy" , location:"Sugar Land" , partner:"Joe Deu-Ngoc" , email:"Deu-Ngoc@canalpharma.com" , phone:"657-2506-0096", status:false },
    {id:5 , pharmacy:"San Jose Clinic Pharmacy" , location:"WestHouston" , partner:"Chris Soles" , email:"Chris@sanjose.com" , phone:"987-236-5858", status:false }       
    ]
}


public openPharmacyDialog(id) {
let dialogRef = this.dialog.open(AddPharmacyComponent, {
    data: id,
    height: 'auto',
    width: '600px'
});
dialogRef.afterClosed().subscribe(data => {
});
}

deletePharmacy(){
//this.alertService.createAlert('Successfully deleted.', 1);
}

}
