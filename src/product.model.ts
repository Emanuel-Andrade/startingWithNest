export class ProductModel {
  id: number;
  name: string;
  price: number;
  code: string;

  constructor(name, price, code) {
    this.code = code;
    this.name = name;
    this.price = price;
  }
}
