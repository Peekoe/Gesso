import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Quiz, Scope } from "../types/models.ts";
import {
  CreateQuizParams,
  EditQuizParams,
  ListQuizzesInCourseParams,
  ReorderQuizItemsParams,
  ValidateQuizAccessCodeParams,
} from "../types/params.ts";

export class Quizzes extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listQuizzesInCourse(
    course_id: string,
    params?: ListQuizzesInCourseParams,
    body?: unknown,
  ): Promise<Quiz[]> {
    const endpoint = `/api/v1/courses/${course_id}/quizzes`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Quiz[];
    }

    return Promise.reject(response.statusText);
  }

  public async getSingleQuiz(
    course_id: string,
    id: string,
    body?: unknown,
  ): Promise<Quiz> {
    const endpoint = `/api/v1/courses/${course_id}/quizzes/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Quiz;
    }

    return Promise.reject(response.statusText);
  }

  public async createQuiz(
    course_id: string,
    params?: CreateQuizParams,
    body?: unknown,
  ): Promise<Quiz> {
    const endpoint = `/api/v1/courses/${course_id}/quizzes`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Quiz;
    }

    return Promise.reject(response.statusText);
  }

  public async editQuiz(
    course_id: string,
    id: string,
    params?: EditQuizParams,
    body?: unknown,
  ): Promise<Quiz> {
    const endpoint = `/api/v1/courses/${course_id}/quizzes/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Quiz;
    }

    return Promise.reject(response.statusText);
  }

  public async deleteQuiz(
    course_id: string,
    id: string,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/courses/${course_id}/quizzes/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async reorderQuizItems(
    course_id: string,
    id: string,
    params?: ReorderQuizItemsParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/courses/${course_id}/quizzes/${id}/reorder`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async validateQuizAccessCode(
    course_id: string,
    id: string,
    params?: ValidateQuizAccessCodeParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint =
      `/api/v1/courses/${course_id}/quizzes/${id}/validate_access_code`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }
}
