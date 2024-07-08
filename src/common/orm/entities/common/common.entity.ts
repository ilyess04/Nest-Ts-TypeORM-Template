import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../user.entity";

@Entity()
export class CommonModel {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: "boolean",
    default: false,
  })
  isArchived: boolean;
  @Column({
    type: "boolean",
    default: false,
  })
  isDeleted: boolean;
  @ManyToOne(() => User)
  createdBy: User;
  @ManyToOne(() => User)
  updatedBy: User;
}
