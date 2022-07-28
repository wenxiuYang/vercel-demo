import { BaseService } from './base';

export class CustomerService extends BaseService {
  public static async getUserCountry(): Promise<any> {
    const res = await this.get('https://test.narstravelretail.cn/api/geo', {});
    return res;
  }
}

export default CustomerService;
