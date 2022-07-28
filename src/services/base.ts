import Taro from '@tarojs/taro';
import axios from 'axios';

const service = axios.create({});

service.interceptors.response.use(
  function(response) {
    return response;
  },
  function({response}) {
    switch (true) {
      case response.status === 401:
        // window.location.reload();
        return Promise.reject(response);
        break;
      default:
        return Promise.reject(response);
    }
  }
);

export class BaseService {
  protected static showError(t?: any) {
    Taro.showToast({
      title: '接口异常：' + t,
      icon: 'none',
      duration: 1500,
    });
  }

  protected static basicHeader(): object {

    return {
      Authorization: '',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      cache: 'no-cache',
      redirect: 'follow',
      referrer: 'no-referrer',
      crossdomain: 'true',
    };
  }

  protected static async get(url: string, data?: any): Promise<any> {
    const response = new Promise(async (resolve, reject) => {
      try {
        await service
          .get(url, { params: data, headers: { ...this.basicHeader() } })
          .then(async (res: any) => {
            resolve(res);
          })
          .catch(async (err: any) => {
            reject(err);
          });
      } catch (e) {
        reject(e);
      }
    });
    return response;
  }

  protected static async post(url: string, data: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        await service
          .post(url, data, { headers: { ...this.basicHeader() } })
          .then((res: any) => {
            resolve(res);
          })
          .catch((err: any) => {
            reject(err);
          });
      } catch (e) {
        reject(e);
      }
    });
  }

  protected static put(url: string, data: any): any {
    const response = new Promise(async (resolve, reject) => {
      try {
        await service
          .put(url, data, { headers: { ...this.basicHeader() } })
          .then(async (res: any) => {
            resolve(res);
          })
          .catch(async (err: any) => {
            reject(err);
          });
      } catch (e) {
        reject(e);
      }
    });
    return response;
  }
  protected static delete(url: string, data?: any): any {
    const response = new Promise(async (resolve, reject) => {
      try {
        await service
          .delete(url, { params: data, headers: { ...this.basicHeader() } })
          .then(async (res: any) => {
            resolve(res);
          })
          .catch(async (err: any) => {
            reject(err);
          });
      } catch (e) {
        reject(e);
      }
    });
    return response;
  }
}
