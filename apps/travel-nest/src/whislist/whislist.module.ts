import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WhislistModuleBase } from "./base/whislist.module.base";
import { WhislistService } from "./whislist.service";
import { WhislistController } from "./whislist.controller";
import { WhislistResolver } from "./whislist.resolver";

@Module({
  imports: [WhislistModuleBase, forwardRef(() => AuthModule)],
  controllers: [WhislistController],
  providers: [WhislistService, WhislistResolver],
  exports: [WhislistService],
})
export class WhislistModule {}
