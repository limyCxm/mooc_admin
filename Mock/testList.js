import Mock from 'mockjs';

Mock.mock('/test/data', {
  code: true,
  'list[8': [
    {
      name: '@city',
      'number|1-100': 100,
    },
  ],
});
