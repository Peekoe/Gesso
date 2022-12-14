import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Assessment, Result, Scope } from "../types/models.ts";
import { ListLiveAssessmentResultsParams } from "../types/params.ts";

export class LiveAssessments extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async createLiveAssessmentResults(
    course_id: string,
    assessment_id: string,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint =
      `/api/v1/courses/${course_id}/live_assessments/${assessment_id}/results`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async listLiveAssessmentResults(
    course_id: string,
    assessment_id: string,
    params?: ListLiveAssessmentResultsParams,
    body?: unknown,
  ): Promise<Result> {
    const endpoint =
      `/api/v1/courses/${course_id}/live_assessments/${assessment_id}/results`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Result;
    }

    return Promise.reject(response.statusText);
  }

  public async createOrFindLiveAssessment(
    course_id: string,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/courses/${course_id}/live_assessments`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async listLiveAssessments(
    course_id: string,
    body?: unknown,
  ): Promise<Assessment> {
    const endpoint = `/api/v1/courses/${course_id}/live_assessments`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Assessment;
    }

    return Promise.reject(response.statusText);
  }
}
