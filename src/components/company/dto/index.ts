import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateCompanyDto {
  @IsString()
  @ApiProperty()
  name: string;
  @IsNumber()
  @ApiProperty()
  managerId: number;
}
