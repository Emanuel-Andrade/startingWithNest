export class validation {
  constructor(private product) {}

  isProductModel() {
    if (typeof this.product.name != 'string') return 'Campo nome é obrigatório';
    if (typeof this.product.code != 'string')
      return 'Campo código é obrigatório';
    if (
      typeof this.product.name != 'string' ||
      typeof this.product.name != 'number'
    )
      return 'Campo preço é obrigatório';
  }
}
