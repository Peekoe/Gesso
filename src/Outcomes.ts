import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Outcome, Scope } from "../types/models.ts";
import { ShowAnOutcomeParams, UpdateAnOutcomeParams } from "../types/params.ts";

export class Outcomes extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async showAnOutcome(
    id: string,
    params?: ShowAnOutcomeParams,
    body?: unknown,
  ): Promise<Outcome> {
    const endpoint = `/api/v1/outcomes/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Outcome;
    }

    return Promise.reject(response.statusText);
  }

  public async updateAnOutcome(
    id: string,
    params?: UpdateAnOutcomeParams,
    body?: unknown,
  ): Promise<Outcome> {
    const endpoint = `/api/v1/outcomes/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Outcome;
    }

    return Promise.reject(response.statusText);
  }

  public async getAlignedAssignmentsForAnOutcomeInCourseForParticularStudent(
    course_id: string,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/courses/${course_id}/outcome_alignments`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }
}
