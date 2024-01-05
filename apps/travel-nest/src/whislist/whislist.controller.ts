import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WhislistService } from "./whislist.service";
import { WhislistControllerBase } from "./base/whislist.controller.base";

@swagger.ApiTags("whislists")
@common.Controller("whislists")
export class WhislistController extends WhislistControllerBase {
  constructor(
    protected readonly service: WhislistService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
