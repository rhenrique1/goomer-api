import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
@Entity()
export class Product {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  restaurantId: number;

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
