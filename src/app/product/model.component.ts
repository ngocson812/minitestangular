import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Productservice} from "../service/productservice";

@Component({
  selector: 'app-product',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  products : Product[] = []

  formCreate!: FormGroup;

  constructor(private productService : Productservice) {
    this.products = productService.products
  }

  product : Product = new Product(0,'',0)

  ngOnInit(): void {
    this.formCreate = new FormGroup({
      id:new FormControl(0),
      name:new FormControl("",Validators.minLength(4)),
      price:new FormControl(0,Validators.min(5)),
      img:new FormControl()
    })
  }

  showEdit(product: Product){
    this.product = new Product(product.id,product.name,product.price);
  }

  edit(formEdit:any){
    this.productService.create(formEdit);
  }

  delete(id: number){
    this.productService.delete(id);
  }

  create(){
    this.productService.create(this.formCreate.value);
  }
}
