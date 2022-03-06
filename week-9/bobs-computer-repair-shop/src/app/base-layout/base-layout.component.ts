//
// References:  https://blog.angular-university.io/angular-2-ngfor/

import { Component, OnInit } from '@angular/core';
import { InvoiceDialogComponent } from '../invoice-dialog/invoice-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Invoice } from '../services/invoice';
import { ItemService } from '../services/item.service';
import { Service } from '../models/services.interface';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
})
export class BaseLayoutComponent implements OnInit {
  services: Service[];
  invoice: Invoice;

  constructor(private dialog: MatDialog, private itemService: ItemService) {
    this.services = itemService.getServices();
    this.invoice = new Invoice();
  }

  ngOnInit(): void {}

  clearInvoice(): void {
    for (let item of this.services) {
      item.checked = false;
    }
  }

  submit(): void {
    for (let item of this.services) {
      if (item.checked) {
        this.invoice.addServiceItem(item);
      }
    }

    const dialogRef = this.dialog.open(InvoiceDialogComponent, {
      data: {
        invoice: this.invoice,
      },
      disableClose: true,
      width: '600px',
    });
  }
}
