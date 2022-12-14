import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Grade, Report } from "../types/models.ts";
import { StartReportParams } from "../types/params.ts";

export class AccountReports extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listAvailableReports(
    account_id: string,
    body?: unknown,
  ): Promise<Grade> {
    const endpoint = `/api/v1/accounts/${account_id}/reports`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Grade;
    }

    return Promise.reject(response.statusText);
  }

  public async startReport(
    account_id: string,
    report: string,
    params?: StartReportParams,
    body?: unknown,
  ): Promise<Report> {
    const endpoint = `/api/v1/accounts/${account_id}/reports/${report}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.post(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Report;
    }

    return Promise.reject(response.statusText);
  }

  public async indexOfReports(
    account_id: string,
    report: string,
    body?: unknown,
  ): Promise<Report[]> {
    const endpoint = `/api/v1/accounts/${account_id}/reports/${report}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Report[];
    }

    return Promise.reject(response.statusText);
  }

  public async statusOfReport(
    account_id: string,
    report: string,
    id: string,
    body?: unknown,
  ): Promise<Report> {
    const endpoint = `/api/v1/accounts/${account_id}/reports/${report}/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Report;
    }

    return Promise.reject(response.statusText);
  }

  public async deleteReport(
    account_id: string,
    report: string,
    id: string,
    body?: unknown,
  ): Promise<Report> {
    const endpoint = `/api/v1/accounts/${account_id}/reports/${report}/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Report;
    }

    return Promise.reject(response.statusText);
  }
}
