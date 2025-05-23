import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  gallery: any;
  GalleryInfo: any;
  largePhoto: any;
  IsShowImg: any;
  baseUrl:string='';
  IsShow = false;
  constructor(private _config: ApiService) {
   // this._config.loadScript();
    this.gallery=['p11','P (1)','P (2)','P (4)','P (5)'];
    
    this.baseUrl=this._config.baseUrl;
  }

  ngOnInit(): void {
    this.GetGallery();
  }
  showPhoto(url: string) {
    this.IsShowImg = url;
    this.IsShow = true;
  }
  GetGallery() {
    const objBO = {
      url: 'api/data/DataQueries',
      AutoId: 0,
      from: '1900/01/01',
      to: '1900/01/01',
      Logic: 'GetGallery'
    };
    this._config.post(objBO).subscribe(data => {
      this.GalleryInfo = data.ResultSet.Table;
    });
  }
}
