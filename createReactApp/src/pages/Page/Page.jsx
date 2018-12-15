import React, { Component } from 'react';
import LatestActivity from './components/LatestActivity';

export default class Page extends Component {
  static displayName = 'Page';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page-page">
        <LatestActivity />
      </div>
    );
  }
}
