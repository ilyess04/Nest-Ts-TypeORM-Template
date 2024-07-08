import { Entity, Column, OneToMany } from "typeorm";
import { CommonModel } from "./common/common.entity";
import { Company } from "./company.entity";

@Entity()
export class User extends CommonModel {
  @Column({
    type: "varchar",
    length: 255,
    nullable: false,
  })
  fullName: string;
  @Column({
    type: "varchar",
    length: 255,
    unique: true,
    nullable: false,
  })
  email: string;
  @Column({
    type: "varchar",
    length: 255,
    nullable: false,
    select: true,
  })
  password: string;
  @OneToMany(() => Company, (company) => company.manager)
  companies: Company[];
}
