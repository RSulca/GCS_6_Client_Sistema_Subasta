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
  selector: 'app-historial-subastas',
  templateUrl: './historial-subastas.component.html',
  styleUrls: ['./historial-subastas.component.css']
})
export class HistorialSubastasComponent implements OnInit {
  displayedColumns: string[] = ['position', 'titulo', 'tipo', 'modo', 'fechaInicio', 'fechaFin', 'product', 'image', 'total', 'estado'];
  dataSource = new MatTableDataSource([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  enableSpinner: boolean = false;
  subastas = [];

  constructor(private reporteService: ReporteService, public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.obtenerSubastas();
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

  obtenerSubastas(): void {
    this.enableSpinner = true;
    this.reporteService.getSubastasXUser().subscribe((data: any) => {
      console.log(data.data[5].pujas)
      this.enableSpinner = false;
      let elementos = [];
      data.data.forEach((el, index) => {
        elementos.push({
          position: index + 1,
          titulo: el.titulo,
          tipo: el.tipo,
          modo: el.modo,
          fechaInicio: el.fecha_inicio,
          fechaFin: el.fecha_fin,
          product: el.producto.name,
          image: el.producto.imgs[0],
          total: el.precio_pagado,
          estado: el.estado,
          pujas: el.pujas.length
        });
      });
      this.dataSource.data = elementos;
      this.subastas = elementos;
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
          text: 'Reporte de Subastas',
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
        this.getSubastasObject(),
        {
          text: 'Pujas por Subastas',
          bold: true,
          fontSize: 20,
          alignment: 'left',
          margin: [0,20, 0, 20],
          color: '#0033FF'
        },
        this.getPujas()
      ],
      styles: {
        email: {
          margin: [0, 0, 0, 20]
        }
      }
    };
  }

  getSubastasObject() {
    return {
      table: {
        widths: [19, '*', 50, 39, 61, 61, 50, 56, '*'],
        body: [
          [{
            text: 'N°',
            style: 'tableHeader'
          },
          {
            text: 'Titulo',
            style: 'tableHeader'
          },
          {
            text: 'Tipo',
            style: 'tableHeader'
          },
          {
            text: 'Modo',
            style: 'tableHeader'
          },
          {
            text: 'Fecha Inicio',
            style: 'tableHeader'
          },
          {
            text: 'Fecha Fin',
            style: 'tableHeader'
          },
          {
            text: 'Producto',
            style: 'tableHeader'
          },
          {
            text: 'Monto(S/)',
            style: 'tableHeader'
          },
          {
            text: 'Estado',
            style: 'tableHeader'
          }
          ],
          ...this.subastas.map((ed, index) => {
            let fechInicio =this.datepipe.transform(ed.fechaInicio, 'dd-MM-yyyy');
            let fechFin =this.datepipe.transform(ed.fechaFin, 'dd-MM-yyyy');
            return [index+1, ed.titulo, ed.tipo, ed.modo, fechInicio, fechFin, ed.product, ed.total==undefined?0:ed.total, ed.estado];
          })
        ]
      }
    };
  }

  getPujas(){
    return {
      table: {
        widths: [19, '*', 50, '*'],
        body: [
          [{
            text: 'N°',
            style: 'tableHeader'
          },
          {
            text: 'Titulo',
            style: 'tableHeader'
          },
          {
            text: 'Pujas',
            style: 'tableHeader'
          },
          {
            text: 'Estado',
            style: 'tableHeader'
          }
          ],
          ...this.subastas.map((ed, index) => {
            console.log(this.subastas)
            return [index+1, ed.titulo, ed.pujas, ed.estado];
          })
        ]
      }
    };
  }

}
