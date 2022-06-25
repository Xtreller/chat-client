import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-admin-table-actions',
  templateUrl: './admin-table-actions.component.html',
  styleUrls: ['./admin-table-actions.component.scss']
})
export class AdminTableActionsComponent implements ICellRendererAngularComp {
  params: any;

  constructor() { }
  refresh(params: ICellRendererParams): boolean {
    throw new Error('Method not implemented.');
  }
  agInit(params: ICellRendererParams): void {
    this.params = params;
  }


}
