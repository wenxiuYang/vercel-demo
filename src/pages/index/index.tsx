import { useEffect } from 'react';
import { View } from '@tarojs/components';
import { CustomerService } from '@services/index';
import './index.scss';

export default function Index() {
  useEffect(() => {
    getCountry();
  }, []);

  const getCountry = async () => {
    try {
      const resp = await CustomerService.getUserCountry();
      console.log('respense: ', resp);
    } catch (err) {}
  };

  return <View className='home-page'>Hello World</View>;
}
