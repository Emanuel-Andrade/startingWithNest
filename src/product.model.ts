import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class ProductModel extends Model<ProductModel> {
  @Column({
    type: DataType.STRING(250),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.FLOAT(8, 2),
    allowNull: false,
  })
  price: number;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  code: string;
}
