import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";

import { CreateScoreParams } from "../types/params.ts";

export class Score extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async createScore(
    course_id: string,
    line_item_id: string,
    params?: CreateScoreParams,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint =
      `/api/v1/api/lti/courses/${course_id}/line_items/${line_item_id}/scores`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
