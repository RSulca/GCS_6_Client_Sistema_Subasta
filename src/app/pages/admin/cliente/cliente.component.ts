import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NotifierService } from 'src/app/services/notifier.service';
import { ClientReq } from 'src/app/models/request/client.model';
import { ClienteService } from 'src/app/services/cliente.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { config } from 'process';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['position', 'nombres', 'apellidos', 'DNI', 'correo'];
  clientes: ClientReq[];
  modalRef: BsModalRef;
  enableSpinner: boolean = false;
  dataSource = new MatTableDataSource([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  inhabilitados = [];

  constructor(private nf: NotifierService, private clienteService:ClienteService, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.listar();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  listar(){
    this.clienteService.listar()
      .subscribe(data => {
        this.clientes = data['user'];
      })
  }

  inhabilitar(id: number){
    if(confirm('Está seguro de inhabilitar?')){
      this.clienteService.inhabilitar(id)
      .subscribe(data=>{
        this.nf.notification("success", {
          'title': 'Eliminación exitosa.',
          'description': 'Se ha deshabilitado correctamente.'
        });
        this.listar();
      })
    } 
  }

  habilitar(id: number){
    if(confirm('Está seguro de habilitar?')){
      this.clienteService.habilitar(id)
      .subscribe(data=>{
        this.nf.notification("success", {
          'title': 'Habilitación exitosa.',
          'description': 'Se ha habilitado correctamente.'
        });
        this.listar();
      })
    } 
  }

  verTabla(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'gray modal-xl' }));
    this.listarInhabilitados();
  }

  listarInhabilitados(): void {
    this.enableSpinner = true;
    this.clienteService.listarInhabilitados().subscribe((data: any) => {
       this.enableSpinner = false;
       let elementos = [];
      data.user.forEach((cli, index) => {
        elementos.push({
          position: index + 1,
          nombres: cli.name,
          apellidos: cli.lastname,
          dni: cli.dni,
          correo: cli.email
        });
      });
      this.dataSource.data = elementos;
      this.inhabilitados = elementos;
    })
  }

}
