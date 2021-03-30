import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { OpeningHours } from "./OpeningHours";

@Entity({ name: 'Restaurant' })
export class Restaurant {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  photo: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @OneToMany(type => OpeningHours, openingHours => openingHours.restaurant)
  openingHours: OpeningHours[];

}
