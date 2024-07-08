import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { EmailModule } from "src/common/email/email.module";
import { AuthService } from "./auth/auth.service";
import { AuthController } from "./auth/auth.controller";
import { UserService } from "./user.service";
import { DatabaseModule } from "src/common/orm/database/database.module";

@Module({
  imports: [
    DatabaseModule,
    PassportModule.register({ defaultStrategy: ["jwt", "refresh"] }),
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
    }),
    EmailModule,
  ],
  providers: [AuthService, UserService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class UserModule {}
