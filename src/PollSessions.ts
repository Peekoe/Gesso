import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { PollSession, Scope } from "../types/models.ts";
import {
  CreateSinglePollSessionParams,
  UpdateSinglePollSessionParams,
} from "../types/params.ts";

export class PollSessions extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listPollSessionsForPoll(
    poll_id: string,
    body?: unknown,
  ): Promise<PollSession> {
    const endpoint = `/api/v1/polls/${poll_id}/poll_sessions`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as PollSession;
    }

    return Promise.reject(response.statusText);
  }

  public async getTheResultsForSinglePollSession(
    poll_id: string,
    id: string,
    body?: unknown,
  ): Promise<PollSession> {
    const endpoint = `/api/v1/polls/${poll_id}/poll_sessions/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as PollSession;
    }

    return Promise.reject(response.statusText);
  }

  public async createSinglePollSession(
    poll_id: string,
    params?: CreateSinglePollSessionParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/polls/${poll_id}/poll_sessions`;
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

  public async updateSinglePollSession(
    poll_id: string,
    id: string,
    params?: UpdateSinglePollSessionParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/polls/${poll_id}/poll_sessions/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async deletePollSession(
    poll_id: string,
    id: string,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/polls/${poll_id}/poll_sessions/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async openPollSession(
    poll_id: string,
    id: string,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/polls/${poll_id}/poll_sessions/${id}/open`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async closeAnOpenedPollSession(
    poll_id: string,
    id: string,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/polls/${poll_id}/poll_sessions/${id}/close`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async listOpenedPollSessions(body?: unknown): Promise<Scope> {
    const endpoint = "/api/v1/poll_sessions/opened";
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }

  public async listClosedPollSessions(body?: unknown): Promise<Scope> {
    const endpoint = "/api/v1/poll_sessions/closed";
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response.statusText);
  }
}
