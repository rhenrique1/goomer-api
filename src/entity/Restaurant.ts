import {Entity, PrimaryGeneratedColumn, Column, JoinTable, OneToMany} from "typeorm";
import { Product } from "./Product";

@Entity({name: 'Restaurant'})
export class Restaurant {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  photo: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  openingHours: string;

  @OneToMany(type => Product, product => product.restaurant) products: Product[];
}
