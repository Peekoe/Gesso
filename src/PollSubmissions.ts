import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

import { CreateSinglePollSubmissionParams } from '../types/params';
  
export class PollSubmissions extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getSinglePollSubmission(poll_id: string, poll_session_id: string, id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/polls/${poll_id}/poll_sessions/${poll_session_id}/poll_submissions/${id}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async createSinglePollSubmission(poll_id: string, poll_session_id: string, params?: CreateSinglePollSubmissionParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/polls/${poll_id}/poll_sessions/${poll_session_id}/poll_submissions`;
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
