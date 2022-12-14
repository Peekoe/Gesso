import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Assignment, Progress, Scope } from "../types/models.ts";
import {
  BatchCreateOverridesInCourseParams,
  BatchRetrieveOverridesInCourseParams,
  BatchUpdateOverridesInCourseParams,
  CreateAnAssignmentOverrideParams,
  CreateAnAssignmentParams,
  DuplicateAssignnmentParams,
  EditAnAssignmentParams,
  GetSingleAssignmentParams,
  ListAssignmentsParams,
  UpdateAnAssignmentOverrideParams,
} from "../types/params.ts";

export class Assignments extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async deleteAnAssignment(
    course_id: string,
    id: string,
    body?: unknown,
  ): Promise<Assignment> {
    const endpoint = `/api/v1/courses/${course_id}/assignments/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Assignment;
    }

    return Promise.reject(response.statusText);
  }

  public async listAssignments(
    course_id: string,
    params?: ListAssignmentsParams,
    body?: unknown,
  ): Promise<Assignment[]> {
    const endpoint = `/api/v1/courses/${course_id}/assignments`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Assignment[];
    }

    return Promise.reject(response.statusText);
  }

  public async listAssignmentsForUser(
    user_id: string,
    course_id: string,
    body?: unknown,
  ): Promise<unknown> {
    const endpoint =
      `/api/v1/users/${user_id}/courses/${course_id}/assignments`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as unknown;
    }

    return Promise.reject(response.statusText);
  }

  public async duplicateAssignnment(
    course_id: string,
    assignment_id: string,
    params?: DuplicateAssignnmentParams,
    body?: unknown,
  ): Promise<Assignment> {
    const endpoint =
      `/api/v1/courses/${course_id}/assignments/${assignment_id}/duplicate`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Assignment;
    }

    return Promise.reject(response.statusText);
  }

  public async getSingleAssignment(
    course_id: string,
    id: string,
    params?: GetSingleAssignmentParams,
    body?: unknown,
  ): Promise<Assignment> {
    const endpoint = `/api/v1/courses/${course_id}/assignments/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Assignment;
    }

    return Promise.reject(response.statusText);
  }

  public async createAnAssignment(
    course_id: string,
    params?: CreateAnAssignmentParams,
    body?: unknown,
  ): Promise<Assignment> {
    const endpoint = `/api/v1/courses/${course_id}/assignments`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Assignment;
    }

    return Promise.reject(response.statusText);
  }

  public async editAnAssignment(
    course_id: string,
    id: string,
    params?: EditAnAssignmentParams,
    body?: unknown,
  ): Promise<Assignment> {
    const endpoint = `/api/v1/courses/${course_id}/assignments/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Assignment;
    }

    return Promise.reject(response.statusText);
  }

  public async bulkUpdateAssignmentDates(
    course_id: string,
    body?: unknown,
  ): Promise<Progress> {
    const endpoint = `/api/v1/courses/${course_id}/assignments/bulk_update`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Progress;
    }

    return Promise.reject(response.statusText);
  }

  public async listAssignmentOverrides(
    course_id: string,
    assignment_id: string,
    body?: unknown,
  ): Promise<Assignment[]> {
    const endpoint =
      `/api/v1/courses/${course_id}/assignments/${assignment_id}/overrides`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Assignment[];
    }

    return Promise.reject(response.statusText);
  }

  public async getSingleAssignmentOverride(
    course_id: string,
    assignment_id: string,
    id: string,
    body?: unknown,
  ): Promise<Assignment> {
    const endpoint =
      `/api/v1/courses/${course_id}/assignments/${assignment_id}/overrides/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Assignment;
    }

    return Promise.reject(response.statusText);
  }

  public async redirectToTheAssignmentOverrideForGroup(
    group_id: string,
    assignment_id: string,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint =
      `/api/v1/groups/${group_id}/assignments/${assignment_id}/override`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async redirectToTheAssignmentOverrideForSection(
    course_section_id: string,
    assignment_id: string,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint =
      `/api/v1/sections/${course_section_id}/assignments/${assignment_id}/override`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async createAnAssignmentOverride(
    course_id: string,
    assignment_id: string,
    params?: CreateAnAssignmentOverrideParams,
    body?: unknown,
  ): Promise<Assignment> {
    const endpoint =
      `/api/v1/courses/${course_id}/assignments/${assignment_id}/overrides`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Assignment;
    }

    return Promise.reject(response.statusText);
  }

  public async updateAnAssignmentOverride(
    course_id: string,
    assignment_id: string,
    id: string,
    params?: UpdateAnAssignmentOverrideParams,
    body?: unknown,
  ): Promise<Assignment> {
    const endpoint =
      `/api/v1/courses/${course_id}/assignments/${assignment_id}/overrides/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Assignment;
    }

    return Promise.reject(response.statusText);
  }

  public async deleteAnAssignmentOverride(
    course_id: string,
    assignment_id: string,
    id: string,
    body?: unknown,
  ): Promise<Assignment> {
    const endpoint =
      `/api/v1/courses/${course_id}/assignments/${assignment_id}/overrides/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Assignment;
    }

    return Promise.reject(response.statusText);
  }

  public async batchRetrieveOverridesInCourse(
    course_id: string,
    params?: BatchRetrieveOverridesInCourseParams,
    body?: unknown,
  ): Promise<Assignment[]> {
    const endpoint = `/api/v1/courses/${course_id}/assignments/overrides`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Assignment[];
    }

    return Promise.reject(response.statusText);
  }

  public async batchCreateOverridesInCourse(
    course_id: string,
    params?: BatchCreateOverridesInCourseParams,
    body?: unknown,
  ): Promise<Assignment[]> {
    const endpoint = `/api/v1/courses/${course_id}/assignments/overrides`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Assignment[];
    }

    return Promise.reject(response.statusText);
  }

  public async batchUpdateOverridesInCourse(
    course_id: string,
    params?: BatchUpdateOverridesInCourseParams,
    body?: unknown,
  ): Promise<Assignment[]> {
    const endpoint = `/api/v1/courses/${course_id}/assignments/overrides`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Assignment[];
    }

    return Promise.reject(response.statusText);
  }
}
