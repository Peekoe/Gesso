import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Result as ResultModel } from "../types/models.ts";

export class Result extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async showCollectionOfResults(
    course_id: string,
    line_item_id: string,
    body?: unknown,
  ): Promise<ResultModel> {
    const endpoint =
      `/api/v1/api/lti/courses/${course_id}/line_items/${line_item_id}/results`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as ResultModel;
    }

    return Promise.reject(response.statusText);
  }

  public async showResult(
    course_id: string,
    line_item_id: string,
    id: string,
    body?: unknown,
  ): Promise<ResultModel> {
    const endpoint =
      `/api/v1/api/lti/courses/${course_id}/line_items/${line_item_id}/results/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as ResultModel;
    }

    return Promise.reject(response.statusText);
  }
}
