import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../Service/config.service";
import {UserInfo} from "../Interface/UserInfo";
@Component({
  selector: 'getapi-angular-get-api-user',
  templateUrl: './get-api-user.component.html',
  styleUrls: ['./get-api-user.component.scss']
})
export class GetApiUserComponent implements OnInit {
  datauser:UserInfo[] = [];
  constructor(private _api: ConfigService) { }
  ngOnInit():void {
    this._api.getConfig().subscribe(resp => {
      this.datauser = resp;
    })
  }
  submitData(){
    console.log(this.datauser);
  }

}
