import Mock from 'mockjs2'
import { builder, getQueryParameters } from '../util'

const totalCount = 5701

const serverList = (options) => {
  const parameters = getQueryParameters(options)

  const result = []
  const pageNo = parseInt(parameters.pageNo)
  const pageSize = parseInt(parameters.pageSize)
  const totalPage = Math.ceil(totalCount / pageSize)
  const key = (pageNo - 1) * pageSize
  const next = (pageNo >= totalPage ? (totalCount % pageSize) : pageSize) + 1

  for (let i = 1; i < next; i++) {
    const tmpKey = key + i
    result.push({
      key: tmpKey,
      id: tmpKey,
      no: 'No ' + tmpKey,
      description: '正常种植',
      callNo: Mock.mock('@integer(1, 999)'),
      status: Mock.mock('@integer(0, 3)'),
      updatedAt: Mock.mock('@datetime'),
      editable: false
    })
  }

  return builder({
    pageSize: pageSize,
    pageNo: pageNo,
    totalCount: totalCount,
    totalPage: totalPage,
    data: result
  })
}

const projects = () => {
  return builder({
    'data': [{
      id: 1,
      cover: 'http://studentslife.top:8120/uploads/big/03aea09335fdaf6e34745a7d9208ab1c.png',
      title: '萌芽和开始生长期',
      description: '根系生长，主要是上年秋季长出的根继续延伸，随着地温的升高，逐渐发出新根。',
      status: 1,
      updatedAt: '2022-01-26 11:00:00'
    },
      {
        id: 2,
        cover: 'http://studentslife.top:8120/uploads/big/1fd99c60b675a4de839d31bfb635f240.png',
        title: '现蕾',
        description: '当新茎长出3片叶，而第四片叶未完全长出时，花序就在第四片叶的托叶鞘内显露。',
        status: 1,
        updatedAt: '2022-01-26 11:00:00'
      },
      {
        id: 3,
        cover: 'http://studentslife.top:8120/uploads/big/2cec26350dfb7d345f729a07344160c2.png',
        title: '开花和结果期',
        description: '从花蕾显露到第一朵花开放，需15天左右。由开花至果实成熟，又需1个月左右。',
        status: 1,
        updatedAt: '2022-01-26 11:00:00'
      },
      {
        id: 4,
        cover: 'http://studentslife.top:8120/uploads/big/f4bfc365a1176b883e7ec906d0602e7b.png',
        title: '旺盛生长期',
        description: '草莓果实采收后，植株进入旺盛生长期，先在腋芽大量发生匍匐茎，新茎分枝加速生长，新茎基部发生不定根，形成新的根系。',
        status: 1,
        updatedAt: '2022-01-26 11:00:00'
      },
      {
        id: 5,
        cover: 'http://studentslife.top:8120/uploads/big/9118e59656587f53cbbf9177745f39c6.png',
        title: '花芽分化期',
        description: '　草莓经过旺盛生长期之后，在外界低温（15~20℃）和短日照的条件下开始花芽分化。',
        status: 1,
        updatedAt: '2022-01-26 11:00:00'
      },
      {
        id: 6,
        cover: 'http://studentslife.top:8120/uploads/big/627601f236bf2948165cfc3f1f677f3e.png',
        title: '死亡',
        description: '草莓树枝叶枯萎死亡。',
        status: 1,
        updatedAt: '2022-01-26 11:00:00'
      }
    ],
    'pageSize': 10,
    'pageNo': 0,
    'totalPage': 6,
    'totalCount': 57
  })
}

const activity = () => {
  return builder([{
    id: 1,
    user: {
      nickname: '@name',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
    },
    project: {
      name: '广西北海草莓基地1号',
      action: '更新',
      event: '种苗'
    },
    time: '2018-08-23 14:47:00'
  },
    {
      id: 1,
      user: {
        nickname: '广西北海草莓基地2号',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png'
      },
      project: {
        name: '广西北海草莓基地3号',
        action: '更新',
        event: '铲土'
      },
      time: '2018-08-23 09:35:37'
    },
    {
      id: 1,
      user: {
        nickname: '杨继国',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
      },
      project: {
        name: '广西北海草莓基地4号',
        action: '创建',
        event: '番组计划'
      },
      time: '2017-05-27 00:00:00'
    },
    {
      id: 1,
      user: {
        nickname: '曲丽丽',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
      },
      project: {
        name: '广西北海草莓基地5号',
        action: '更新',
        event: '六月迭代'
      },
      time: '2018-08-23 14:47:00'
    },
    {
      id: 1,
      user: {
        nickname: '张继强',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
      },
      project: {
        name: '广西北海草莓基地6号',
        action: 'created',
        event: '六月迭代'
      },
      time: '2018-08-23 14:47:00'
    },
    {
      id: 1,
      user: {
        nickname: '曲丽丽',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
      },
      project: {
        name: '广西北海草莓基地7号',
        action: 'created',
        event: '六月迭代'
      },
      time: '2018-08-23 14:47:00'
    }
  ])
}

const teams = () => {
  return builder([{
    id: 1,
    name: '北海1号基地',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
  },
    {
      id: 2,
      name: '北海2号基地',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png'
    },
    {
      id: 1,
      name: '北海3号基地',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png'
    },
    {
      id: 1,
      name: '北海4号基地',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png'
    },
    {
      id: 1,
      name: '北海5号基地',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png'
    }
  ])
}

const radar = () => {
  return builder([{
    item: '引用',
    '个人': 70,
    '团队': 30,
    '部门': 40
  },
    {
      item: '口碑',
      '个人': 60,
      '团队': 70,
      '部门': 40
    },
    {
      item: '产量',
      '个人': 50,
      '团队': 60,
      '部门': 40
    },
    {
      item: '贡献',
      '个人': 40,
      '团队': 50,
      '部门': 40
    },
    {
      item: '热度',
      '个人': 60,
      '团队': 70,
      '部门': 40
    },
    {
      item: '引用',
      '个人': 70,
      '团队': 50,
      '部门': 40
    }
  ])
}

Mock.mock(/\/service/, 'get', serverList)
Mock.mock(/\/list\/search\/projects/, 'get', projects)
Mock.mock(/\/workplace\/activity/, 'get', activity)
Mock.mock(/\/workplace\/teams/, 'get', teams)
Mock.mock(/\/workplace\/radar/, 'get', radar)
