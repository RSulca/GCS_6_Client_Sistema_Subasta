import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ReporteService } from 'src/app/services/reporte.service';
import { DatePipe } from '@angular/common';
//PDF
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { LOGO64 } from 'src/app/util/logoBase64';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-record-customers',
  templateUrl: './record-customers.component.html',
  styleUrls: ['./record-customers.component.css']
})
export class RecordCustomersComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'lastname', 'category', 'product', 'image', 'date', 'total'];
  dataSource = new MatTableDataSource([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  enableSpinner: boolean = false;
  customers = [];

  constructor(private reporteService: ReporteService, public datepipe: DatePipe) {
    
  }

  ngOnInit(): void {
    this.obtenerClientes();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  obtenerClientes(): void {
    this.enableSpinner = true;
    this.reporteService.getCustomersXUser().subscribe((data: any) => {
      this.enableSpinner = false;
      let elementos = [];
      data.data.forEach((el, index) => {
        elementos.push({
          position: index + 1,
          name: el.comprador.name,
          lastname: el.comprador.lastname,
          category: el.producto.category,
          product: el.producto.name,
          image: el.producto.imgs[0],
          date: el.fecha_fin,
          total: el.precio_pagado
        });
      });
      this.dataSource.data = elementos;
      this.customers = elementos;
    })
  }

  generatePdf() {
    const documentDefinition = this.getDocumentDefinition();
    pdfMake.createPdf(documentDefinition).download();
  }

  getDocumentDefinition() {
    const datosUser = JSON.parse(localStorage.getItem('user'));
    return {
      content: [
        {
          image: LOGO64,
          width: 75,
          alignment : 'left'
        },
        {
          text: 'Reporte de Clientes',
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20],
          color: '#0033FF'
        },
        {
          columns: [
            [{
              text: `Vendedor: ${datosUser.name} ${datosUser.lastname}`
            },
            {
              text: `DNI: ${datosUser.dni}`
            },
            {
              text: `Email: ${datosUser.email}`,
              style: 'email'
            }
            ]
          ]
        },
        this.getCustomersObject()
      ],
      styles: {
        email: {
          margin: [0, 0, 0, 20]
        }
      }
    };
  }

  getCustomersObject() {
    return {
      table: {
        widths: ['*', '*', '*', '*', '*', '*', '*'],
        body: [
          [{
            text: 'N°',
            style: 'tableHeader'
          },
          {
            text: 'Nombre',
            style: 'tableHeader'
          },
          {
            text: 'Apellidos',
            style: 'tableHeader'
          },
          {
            text: 'Categoría',
            style: 'tableHeader'
          },
          {
            text: 'Producto',
            style: 'tableHeader'
          },
          {
            text: 'Fecha',
            style: 'tableHeader'
          },
          {
            text: 'Monto(S/)',
            style: 'tableHeader'
          }
          ],
          ...this.customers.map((ed, index) => {
            let date =this.datepipe.transform(ed.date, 'dd-MM-yyyy');
            return [index+1, ed.name, ed.lastname, ed.category, ed.product, date, ed.total];
          })
        ]
      }
    };
  }


}
