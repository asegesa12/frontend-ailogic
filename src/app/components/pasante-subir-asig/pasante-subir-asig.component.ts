import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UploadService } from  '../../services/upload.service'

@Component({
  selector: 'app-pasante-subir-asig',
  templateUrl: './pasante-subir-asig.component.html',
  styleUrls: ['./pasante-subir-asig.component.css']
})
export class PasanteSubirAsigComponent implements OnInit {

  files: any[] = [];

    /**
    * Convert Files list to normal array list
    * @param files (Files List)
    */
     prepareFilesList(files: Array<any>) {
      for (const item of files) {
        this.files.push(item);
      }
    }

   onFileDropped($event: any[]) {
     this.prepareFilesList($event);
   }
 

   fileBrowseHandler(files: any[]) {
     this.prepareFilesList(files);
   }

   /**
    * Delete file from files list
    * @param index (File index)
    */
   deleteFile(index: number) {
     this.files.splice(index, 1);
   }

 
 
  constructor(private uploadService: UploadService) { }

  ngOnInit(): void {
 
  }

  

  

}
