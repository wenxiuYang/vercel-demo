export default {
  pages: ['pages/index/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '',
    navigationBarTextStyle: 'black',
    navigationStyle: 'custom',
  },

  permission: {
    'scope.userLocation': {
      desc: '请开启你的地理位置，以便获取您附近的店铺信息',
    },
  },
  animation: false,
};
