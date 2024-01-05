import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WhislistServiceBase } from "./base/whislist.service.base";

@Injectable()
export class WhislistService extends WhislistServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
