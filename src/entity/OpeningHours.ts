import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Restaurant } from "./Restaurant";


@Entity()
export class OpeningHours {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  day: number;

  @Column()
  opening: string;

  @Column()
  closing: string;

  @ManyToOne(type => Restaurant, restaurant => restaurant.openingHours)
  restaurant: Restaurant;
}
