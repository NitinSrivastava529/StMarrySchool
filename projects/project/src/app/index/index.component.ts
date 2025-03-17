import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private _config:ApiService) { }
  NewsInfo: any; 
  IsModal:boolean=true;
   baseUrl: string = '';

  ngOnInit(): void {
    this._config.loadScript();
    this._config.loadIndex();
    this.GetNews(); 
    this.baseUrl = this._config.baseUrl;
  }
  GetNews() {
    const objBO = {
      url: 'api/data/DataQueries',
      AutoId: 0,
      from: '1900/01/01',
      to: '1900/01/01',
      Logic: 'GetNews'
    };
    this._config.post(objBO).subscribe(data => {
      console.log(data)
      this.NewsInfo = data.ResultSet.Table;
    });
  }
}
