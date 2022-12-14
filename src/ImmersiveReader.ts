import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";

export class ImmersiveReader extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }
}
