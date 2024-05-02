/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx0d181431cd62dde0',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '6ed2975b08d351b9bb70e657b2978672',

  PROVINCE: '四川',
  CITY: '泸州',

  USERS: [
    {
      // 想要发送的人的名字
      name: 'xxy小朋友',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'od6iG6pdIYuAad6WtI9BK079q-AA',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'GBcogizs1xMncc8G7sSGhsxC9UwkvoKOZ-pJRiAAq9k',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '08-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '诺诺', year: '2002', date: '08-27',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '诺诺', year: '2002', date: '08-27',
        },
        {
          type: '节日', name: '小周回国', year: '2024', date: '06-23',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2024-04-03' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2024-04-03' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '	xMkyYrO_C6C72z0cq3xE5hwBhd9DksyjaLfrsJsInLk',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'od6iG6pdIYuAad6WtI9BK079q-AA',
    }
  ],

}

module.exports = USER_CONFIG

