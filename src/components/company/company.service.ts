import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ICreateCompany } from "src/common/interfaces/company";
import { Company } from "src/common/orm/entities/company.entity";

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>
  ) {}

  async createCompany(payload: ICreateCompany): Promise<Company> {
    const company = this.companyRepository.create({});
    return await this.companyRepository.save(company);
  }
}
