import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: 'Restaurant' })
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

}
