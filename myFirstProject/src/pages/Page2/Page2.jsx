import React, { Component } from 'react';
import LineBarChart from './components/LineBarChart';

export default class Page2 extends Component {
  static displayName = 'Page2';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page2-page">
        <LineBarChart />
      </div>
    );
  }
}
