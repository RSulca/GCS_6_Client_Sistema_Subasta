import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.css']
})
export class DropzoneComponent implements OnInit {
  files: File[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }
   
  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}
