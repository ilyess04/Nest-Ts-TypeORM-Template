import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ICreateUser, IEditUser } from "src/common/interfaces/user";
import { User } from "src/common/orm/entities/user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async getUserByMail(email: string): Promise<User> {
    return await this.userRepository.findOne({
      where: {
        email,
        isArchived: false,
        isDeleted: false,
      },
    });
  }

  async getUserById(id: number): Promise<User> {
    return await this.userRepository.findOne({
      where: {
        id,
        isArchived: false,
        isDeleted: false,
      },
    });
  }

  async updateUser({ id, updatedBy, ...user }: IEditUser): Promise<User> {
    await this.userRepository.update(id, {
      ...user,
      updatedBy: { id: updatedBy },
    });
    return this.userRepository.findOne({ where: { id } });
  }

  async createUser(payload: ICreateUser): Promise<User> {
    const user = this.userRepository.create(payload);
    return await this.userRepository.save(user);
  }
}
