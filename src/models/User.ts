import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, Unique } from "sequelize-typescript";

@Table({
  timestamps: true,
  tableName: "users",
})
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Unique
  @Column(DataType.STRING)
  username!: string;

  @Column(DataType.STRING)
  password!: string;

  @Column(DataType.STRING)
  email!: string;

  @Column(DataType.DATE)
  createdAt!: Date;

  @Column(DataType.DATE)
  updatedAt!: Date;
}
