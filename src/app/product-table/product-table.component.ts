import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent {
  @Input() response: any = {};

  getResults(): any[] {

    const results: any[] = [];
    if (this.response) {
      const { result } = this.response;
      console.log(result);
      for (const item of result) {
        if (item) {
          results.push(item);
        }
      }
    } else {
      console.log('It is not interactive');
    }
    console.log('result table cli');
    console.log(results);
    return results;
  }
}
