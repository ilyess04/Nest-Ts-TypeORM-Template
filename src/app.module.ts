import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { EmailModule } from "./common/email/email.module";
import { UserModule } from "./components/user/user.module";
import { CompanyModule } from "./components/company/company.module";
import { DatabaseModule } from "./common/orm/database/database.module";

@Module({
  imports: [EmailModule, DatabaseModule, UserModule, CompanyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
