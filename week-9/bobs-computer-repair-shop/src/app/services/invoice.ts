import { ServiceItem } from '../models/service-item.interface';

export class Invoice {
  serviceItems: ServiceItem[];
  partsAmount: number;
  laborAmount: number;

  constructor() {
    this.serviceItems = [];
    this.partsAmount;
    this.laborAmount;
  }

  addServiceItem(serviceItem: ServiceItem): void {
    this.serviceItems.push(serviceItem);
  }

  getServiceTotal(): number {
    let total: number = 0;

    for (let serviceItem of this.serviceItems) {
      total += serviceItem.price;
    }

    return total;
  }

  getInvoiceTotal(): number {
    const serviceTotal: number = this.getServiceTotal();
    const parts: number = this.getPartsAmount();
    const labor: number = this.getLaborAmount();
    const total: number = Number(serviceTotal) + Number(parts) + Number(labor);

    return total;
  }

  getPartsAmount(): number {
    return this.partsAmount;
  }

  getLaborAmount(): number {
    return this.laborAmount;
  }
}
