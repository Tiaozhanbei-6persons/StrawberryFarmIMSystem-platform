<template>
  <page-header-wrapper
    :tab-list="tabList"
    :tab-active-key="tabActiveKey"
    :tab-change="(key) => {
      this.tabActiveKey = key
    }"
    content="各草莓基地的信息。"
  >
    <template v-slot:extraContent>
      <div style="width: 155px; margin-top: -20px;"><img style="width: 100%" :src="extraImage" /></div>
    </template>
    <a-list
      rowKey="id"
      :grid="{gutter: 24, lg: 3, md: 2, sm: 1, xs: 1}"
      :dataSource="dataSource"
      class="card-list"
    >
      <a-list-item slot="renderItem" slot-scope="item">
        <template v-if="!item || item.id === undefined">
          <a-button class="new-btn" type="dashed">
            <a-icon type="plus"/>
            新增产品
          </a-button>
        </template>
        <template v-else>
          <a-card :hoverable="true">
            <a-card-meta>
              <a slot="title">{{ item.title }}</a>
              <a-avatar class="card-avatar" slot="avatar" :src="item.avatar" size="large"/>
              <div class="meta-content" slot="description">{{ item.content }}</div>
            </a-card-meta>
            <template class="ant-card-actions" slot="actions">
              <a>操作一</a>
              <a>操作二</a>
            </template>
          </a-card>
        </template>
      </a-list-item>
    </a-list>
  </page-header-wrapper>
</template>

<script>

const dataSource = []
dataSource.push({})
for (let i = 0; i < 11; i++) {
  dataSource.push({
    id: i,
    title: '广西北海1号基地',
    avatar: 'http://studentslife.top:8120/uploads/big/72c064b1f8c044a5c19efb1ea31d38b0.jpg',
    content: '一般草莓品种在8~9月份或更晚才开始花芽分化。秋末分化的花芽，在第二年4~6月开始结果。'
  })
}

export default {
  name: 'CardList',
  data () {
    this.tabList = [
      { key: 'tab1', tab: '快速开始' },
      { key: 'tab2', tab: '产品简介' },
      { key: 'tab3', tab: '产品文档' }
    ]
    return {
      tabActiveKey: 'tab1',

      extraImage: 'http://studentslife.top:8120/uploads/big/72c064b1f8c044a5c19efb1ea31d38b0.jpg',
      dataSource
    }
  },
  methods: {
    testFun () {
      this.$message.info('快速开始被点击！')
    }
  }
}
</script>

<style lang="less" scoped>
  @import "~@/components/index.less";

  .card-list {
    /deep/ .ant-card-body:hover {
      .ant-card-meta-title>a {
        color: @primary-color;
      }
    }

    /deep/ .ant-card-meta-title {
      margin-bottom: 12px;

      &>a {
        display: inline-block;
        max-width: 100%;
        color: rgba(0,0,0,.85);
      }
    }

    /deep/ .meta-content {
      position: relative;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      height: 64px;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;

      margin-bottom: 1em;
    }
  }

  .card-avatar {
    width: 48px;
    height: 48px;
    border-radius: 48px;
  }

  .ant-card-actions {
    background: #f7f9fa;

    li {
      float: left;
      text-align: center;
      margin: 12px 0;
      color: rgba(0, 0, 0, 0.45);
      width: 50%;

      &:not(:last-child) {
        border-right: 1px solid #e8e8e8;
      }

      a {
        color: rgba(0, 0, 0, .45);
        line-height: 22px;
        display: inline-block;
        width: 100%;
        &:hover {
          color: @primary-color;
        }
      }
    }
  }

  .new-btn {
    background-color: #fff;
    border-radius: 2px;
    width: 100%;
    height: 188px;
  }

</style>
