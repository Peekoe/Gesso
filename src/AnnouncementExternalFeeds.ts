import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { ExternalFeed } from "../types/models.ts";
import { CreateAnExternalFeedParams } from "../types/params.ts";

export class AnnouncementExternalFeeds extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listExternalFeeds(
    course_id: string,
    body?: unknown,
  ): Promise<ExternalFeed[]> {
    const endpoint = `/api/v1/courses/${course_id}/external_feeds`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as ExternalFeed[];
    }

    return Promise.reject(response.statusText);
  }

  public async createAnExternalFeed(
    course_id: string,
    params?: CreateAnExternalFeedParams,
    body?: unknown,
  ): Promise<ExternalFeed> {
    const endpoint = `/api/v1/courses/${course_id}/external_feeds`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as ExternalFeed;
    }

    return Promise.reject(response.statusText);
  }

  public async deleteAnExternalFeed(
    course_id: string,
    external_feed_id: string,
    body?: unknown,
  ): Promise<ExternalFeed> {
    const endpoint =
      `/api/v1/courses/${course_id}/external_feeds/${external_feed_id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as ExternalFeed;
    }

    return Promise.reject(response.statusText);
  }
}
