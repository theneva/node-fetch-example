import React from 'react';

export default class Color extends React.Component {
  render() {
    const { color, hex } = this.props;

    return <div style={{ margin: '0.5em', backgroundColor: '#' + hex }}>
      {color} - {hex}
    </div>;
  }
}
