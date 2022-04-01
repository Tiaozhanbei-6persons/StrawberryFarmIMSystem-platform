import Mock from 'mockjs2'
import { builder, getQueryParameters } from '../util'

const titles = [
  '中国草莓种植情况分析:播种面积及产量不断增加',
  '中国草莓产业数据(2021)分析报告',
  '2021年中国草莓种植情况分析',
  '中国国内草莓场发展情况综述',
  '数据解读我国草莓产业的发展趋势!',
  '草莓行业现状及发展趋势分析',
  '草莓产地简介-中国八大草莓基地你知道多少',
  '日本天价草莓1颗900元 2019中国草莓市场如何'
]

const avatar = ['http://studentslife.top:8120/uploads/big/72c064b1f8c044a5c19efb1ea31d38b0.jpg',
  'http://studentslife.top:8120/uploads/big/72c064b1f8c044a5c19efb1ea31d38b0.jpg',
  'http://studentslife.top:8120/uploads/big/72c064b1f8c044a5c19efb1ea31d38b0.jpg',
  'http://studentslife.top:8120/uploads/big/72c064b1f8c044a5c19efb1ea31d38b0.jpg',
  'http://studentslife.top:8120/uploads/big/72c064b1f8c044a5c19efb1ea31d38b0.jpg'
]

const covers = [
  'http://studentslife.top:8120/uploads/big/72c064b1f8c044a5c19efb1ea31d38b0.jpg',
  'http://studentslife.top:8120/uploads/big/72c064b1f8c044a5c19efb1ea31d38b0.jpg',
  'http://studentslife.top:8120/uploads/big/72c064b1f8c044a5c19efb1ea31d38b0.jpg',
  'http://studentslife.top:8120/uploads/big/72c064b1f8c044a5c19efb1ea31d38b0.jpg'
]

const owner = [
  '付小小',
  '吴加好',
  '周星星',
  '林东东',
  '曲丽丽'
]

const content = '专业草莓种植户发言'
const description = '一般草莓品种在8~9月份或更晚才开始花芽分化。秋末分化的花芽，在第二年4~6月开始结果。'
const href = 'https://ant.design'

const article = (options) => {
  const queryParameters = getQueryParameters(options)
  console.log('queryParameters', queryParameters)
  if (queryParameters && !queryParameters.count) {
    queryParameters.count = 5
  }
  const data = []
  for (let i = 0; i < queryParameters.count; i++) {
    const tmpKey = i + 1
    const num = parseInt(Math.random() * (4 + 1), 10)
    data.push({
      id: tmpKey,
      avatar: avatar[num],
      owner: owner[num],
      content: content,
      star: Mock.mock('@integer(1, 999)'),
      percent: Mock.mock('@integer(1, 999)'),
      like: Mock.mock('@integer(1, 999)'),
      message: Mock.mock('@integer(1, 999)'),
      description: description,
      href: href,
      title: titles[ i % 8 ],
      updatedAt: Mock.mock('@datetime'),
      members: [
        {
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
          name: '曲丽丽',
          id: 'member1'
        },
        {
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
          name: '王昭君',
          id: 'member2'
        },
        {
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
          name: '董娜娜',
          id: 'member3'
        }
      ],
      activeUser: Math.ceil(Math.random() * 100000) + 100000,
      newUser: Math.ceil(Math.random() * 1000) + 1000,
      cover: parseInt(i / 4, 10) % 2 === 0 ? covers[i % 4] : covers[3 - (i % 4)]
    })
  }
  return builder(data)
}

Mock.mock(/\/list\/article/, 'get', article)
