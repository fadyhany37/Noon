import { Iproduct } from './../../../Models/iproduct';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  product: Iproduct = {} as Iproduct;
  linkPattern = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{10,256}/;
  stringPattern = /^[A-Za-z]+[A-Za-z0-9@:%._\+~#= ]+$/;
  usrFormGroup: FormGroup;
  myPassword: any;
  constructor(private router: Router, private fb: FormBuilder) {
    this.usrFormGroup = this.fb.group({
      title: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(20)]],
      images: this.fb.array([fb.control('', Validators.required)]),
      stock: ['', [Validators.required, Validators.min(1)]],
      brand: ['', Validators.required],
      rating: ['', [Validators.required, Validators.min(1), Validators.max(9)]],
      price: ['', [Validators.required, Validators.min(1)]],
      discountPercentage: [
        '',
        [Validators.required, Validators.min(1), Validators.max(60)],
      ],
      thumbnail: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  get title() {
    return this.usrFormGroup.get('title');
  }
  get description() {
    return this.usrFormGroup.get('description');
  }
  get images() {
    var imgArray = this.usrFormGroup.get('images') as FormArray;
    return imgArray;
  }

  get stock() {
    return this.usrFormGroup.get('stock');
  }
  get rating() {
    return this.usrFormGroup.get('rating');
  }
  get price() {
    return this.usrFormGroup.get('price');
  }

  get discountPercentage() {
    return this.usrFormGroup.get('discountPercentage');
  }
  get brand() {
    return this.usrFormGroup.get('brand');
  }
  get thumbnail() {
    return this.usrFormGroup.get('thumbnail');
  }
  get category() {
    return this.usrFormGroup.get('category');
  }

  addImage() {
    this.images.push(this.fb.control('', Validators.required));
  }
  removeImg() {
    this.images.removeAt(-1);
  }

  addProduct() {
    this.product = this.usrFormGroup.value;
    console.log(this.product);
  }

  ngOnInit(): void {}
}
