import { Component, OnInit } from '@angular/core';
import { ColumnApi, ColumnVisibleEvent, GridApi, GridOptions, GridReadyEvent } from 'ag-grid-community';
import { UserService } from '../user.service';
import { AdminTableActionsComponent } from './admin-table-actions/admin-table-actions.component';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  gridApi: GridApi = new GridApi();
  columnApi: ColumnApi = new ColumnApi();
  gridOptions: GridOptions = {
    columnDefs: [
      { headerName: 'ID', field: 'id' , minWidth:80, maxWidth:80,},
      { headerName: 'Наименование', field: 'name' },
      { headerName: 'Email', field: 'email' },
      { headerName: 'Права', field: 'role.role' },
      { headerName: 'Изпратени съобщения', field: 'name' },
      { headerName: 'Изработени часове', field: 'name' },
      { headerName: 'Последен логин', field: 'name' },
      { headerName: 'Действия', field: 'actions',type: 'rightAligned',cellRendererFramework:AdminTableActionsComponent, cellRendererParams: { parent: this }, },

    ],

    defaultColDef: {
      resizable: true,
      sortable: true
    },

    onGridReady: (event: GridReadyEvent) => this.gridReady(event),
  };
  gridReady(event:GridReadyEvent){
    this.gridApi = event.api;
    this.columnApi = event.columnApi;
    this.userService.getUsers().subscribe((data:any)=>{
      this.gridApi.setRowData(data.result)
    })
    this.userService.getClients().subscribe(data=>console.log(data))
  }
}
