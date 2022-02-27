import {Injectable} from "@angular/core";
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})

export class Productservice{

  constructor() {
  }

  products : Product[] = [
    new Product(1,'Ha Noi',9000),
    new Product(2,'Hai Phong',9100),
    new Product(3,'Da Nang',8200),
    new Product(4,'Ho Chi Minh',4500),
    new Product(5,'Hue',6600),
  ]


  delete(id: number): void {
    for (let i = 0; i < this.products.length; i++) {
      if (id === this.products[i].id) {
        this.products.splice(i, 1);
      }
    }
  }

  create(product : Product){
    let check = true;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === product.id){
        this.products[i] = product;
        check = false;
      }
    }
    if (check){
      this.products.push(product);
    }
  }

}


