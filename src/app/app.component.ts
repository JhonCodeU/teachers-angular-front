import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient, public router: Router) { }

  //auth data
  client_id = 'local.649e2609507454.97452373';
  client_secret = 'hnSc3OVHpcIoVot5HABB6lsBfSltmfAzrSqbT5zVutN2KyvwYF';
  intranet_name = 'b24-xr1zj0.bitrix24.co';
  responseData: any;
  code = '';
  token = '';

  //https://b24-xr1zj0.bitrix24.co/oauth/authorize/?client_id=local.649e2609507454.97452373&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A7000

  ngOnInit() {
  }

  getTheCode() {
    const url = 'https://' + this.intranet_name + '/oauth/authorize/?client_id=' + this.client_id + '&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A7000';

    // open new window
    window.open(url, '_blank');
  }

  getToken(event: Event) {
    event.preventDefault();
    console.log(this.code);

    const url = 'https://' + this.intranet_name + '/oauth/token/?client_id=' + this.client_id + '&grant_type=authorization_code&client_secret=' + this.client_secret + '&redirect_uri=http%3A%2F%2Flocalhost%3A7000&code=' + this.code + '&scope=required_permission';

    // set authorization
    this.http.get(url).subscribe(
      (response) => {
        const { access_token } = response as any;
        this.token = access_token;
      },
      (error) => {
        console.log(error);
        window.open(url, '_blank');
      }
    );
  }

  setToken(event: Event) {
    const endPoint = 'crm.product.list';
    const access_code = 'https://' + this.intranet_name + '/rest/'+endPoint+'?auth=' + this.token;

    // get data
    this.http.get(access_code).subscribe(
      (response) => {
        console.log(response);
        this.responseData = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
