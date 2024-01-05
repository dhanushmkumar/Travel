/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Whislist, // @ts-ignore
  User,
} from "@prisma/client";

export class WhislistServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.WhislistCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.WhislistCountArgs>
  ): Promise<number> {
    return this.prisma.whislist.count(args);
  }

  async whislists<T extends Prisma.WhislistFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.WhislistFindManyArgs>
  ): Promise<Whislist[]> {
    return this.prisma.whislist.findMany(args);
  }
  async whislist<T extends Prisma.WhislistFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.WhislistFindUniqueArgs>
  ): Promise<Whislist | null> {
    return this.prisma.whislist.findUnique(args);
  }
  async createWhislist<T extends Prisma.WhislistCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WhislistCreateArgs>
  ): Promise<Whislist> {
    return this.prisma.whislist.create<T>(args);
  }
  async updateWhislist<T extends Prisma.WhislistUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WhislistUpdateArgs>
  ): Promise<Whislist> {
    return this.prisma.whislist.update<T>(args);
  }
  async deleteWhislist<T extends Prisma.WhislistDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.WhislistDeleteArgs>
  ): Promise<Whislist> {
    return this.prisma.whislist.delete(args);
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.whislist
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
