import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Restaurant } from "./Restaurant";
@Entity()
export class Product {
  
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Restaurant, restaurant => restaurant.products) restaurant: Restaurant;

  @Column()
  name: string;

  @Column()
  photo: string;

  @Column()
  description: string;

  @Column({ type: 'decimal' })
  price: number;

  @Column({ type: 'decimal' })
  promotionalPrice: number;

}
