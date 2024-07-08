import { Module } from "@nestjs/common";
import { CompanyService } from "./company.service";
import { CompanyController } from "./company.controller";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "../user/auth/auth.service";
import { UserService } from "../user/user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Company } from "src/common/orm/entities/company.entity";
import { User } from "src/common/orm/entities/user.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Company,User]),
    PassportModule.register({ defaultStrategy: ["jwt", "refresh"] }),
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
    }),
  ],
  providers: [CompanyService, AuthService, UserService],
  controllers: [CompanyController],
  exports: [CompanyService],
})
export class CompanyModule {}
