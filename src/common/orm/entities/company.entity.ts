import { Entity, Column, ManyToOne } from "typeorm";
import { CommonModel } from "./common/common.entity";
import { User } from "./user.entity";

@Entity()
export class Company extends CommonModel {
  @Column({
    type: "varchar",
    length: 255,
    nullable: false,
  })
  name: string;
  @ManyToOne(() => User, (user) => user.companies, { nullable: false })
  manager: User;
}
