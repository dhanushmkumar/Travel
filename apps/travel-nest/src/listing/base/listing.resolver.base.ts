/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Listing } from "./Listing";
import { ListingCountArgs } from "./ListingCountArgs";
import { ListingFindManyArgs } from "./ListingFindManyArgs";
import { ListingFindUniqueArgs } from "./ListingFindUniqueArgs";
import { CreateListingArgs } from "./CreateListingArgs";
import { UpdateListingArgs } from "./UpdateListingArgs";
import { DeleteListingArgs } from "./DeleteListingArgs";
import { TripFindManyArgs } from "../../trip/base/TripFindManyArgs";
import { Trip } from "../../trip/base/Trip";
import { User } from "../../user/base/User";
import { ListingService } from "../listing.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Listing)
export class ListingResolverBase {
  constructor(
    protected readonly service: ListingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "read",
    possession: "any",
  })
  async _listingsMeta(
    @graphql.Args() args: ListingCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Listing])
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "read",
    possession: "any",
  })
  async listings(
    @graphql.Args() args: ListingFindManyArgs
  ): Promise<Listing[]> {
    return this.service.listings(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Listing, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "read",
    possession: "own",
  })
  async listing(
    @graphql.Args() args: ListingFindUniqueArgs
  ): Promise<Listing | null> {
    const result = await this.service.listing(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Listing)
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "create",
    possession: "any",
  })
  async createListing(
    @graphql.Args() args: CreateListingArgs
  ): Promise<Listing> {
    return await this.service.createListing({
      ...args,
      data: {
        ...args.data,

        listingCreatedBy: {
          connect: args.data.listingCreatedBy,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Listing)
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "update",
    possession: "any",
  })
  async updateListing(
    @graphql.Args() args: UpdateListingArgs
  ): Promise<Listing | null> {
    try {
      return await this.service.updateListing({
        ...args,
        data: {
          ...args.data,

          listingCreatedBy: {
            connect: args.data.listingCreatedBy,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Listing)
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "delete",
    possession: "any",
  })
  async deleteListing(
    @graphql.Args() args: DeleteListingArgs
  ): Promise<Listing | null> {
    try {
      return await this.service.deleteListing(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Trip], { name: "trips" })
  @nestAccessControl.UseRoles({
    resource: "Trip",
    action: "read",
    possession: "any",
  })
  async findTrips(
    @graphql.Parent() parent: Listing,
    @graphql.Args() args: TripFindManyArgs
  ): Promise<Trip[]> {
    const results = await this.service.findTrips(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "listingCreatedBy",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getListingCreatedBy(
    @graphql.Parent() parent: Listing
  ): Promise<User | null> {
    const result = await this.service.getListingCreatedBy(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
