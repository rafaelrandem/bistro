import {Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CardModel} from '../../../models/card.model';


@Component({
  selector: 'card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.sass']
})
export class CardModalComponent {

  constructor(
    public dialogRef: MatDialogRef<CardModalComponent>,
    @Inject(MAT_DIALOG_DATA) public card: CardModel )  { }

  onNoClick(){
    this.dialogRef.close();
  }

}
