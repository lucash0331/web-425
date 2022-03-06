import { Component, Inject, OnInit } from '@angular/core';
import { Invoice } from '../services/invoice';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-invoice-dialog',
  templateUrl: './invoice-dialog.component.html',
  styleUrls: ['./invoice-dialog.component.scss'],
})
export class InvoiceDialogComponent implements OnInit {
  invoice: Invoice;

  constructor(
    private dialogRef: MatDialogRef<InvoiceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.invoice = data.invoice;
  }

  ngOnInit(): void {}
}
