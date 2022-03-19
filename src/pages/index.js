import styles from './index.css';
import { Button, Table } from 'antd';
import { Component } from 'react';

const columns = [
  {
    title: '用户ID',
    dataIndex: 'userId',
    key: 'userId',
  },
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '内容',
    dataIndex: 'body',
    key: 'body',
  },
];

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { dataSource: [] };
  }

  render() {
    return (
      <div>
        <Button onClick={this.pullData.bind(this)} type="primary">
          点击拉取数据
        </Button>

        <Table dataSource={this.state.dataSource} columns={columns} />
      </div>
    );
  }

  pullData() {
    let url = 'http://jsonplaceholder.typicode.com/posts';
    let that = this;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        that.setState({ dataSource: data });
      });
  }
}
