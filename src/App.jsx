import React from 'react';

import Color from './Color.jsx';

export default class App extends React.Component {
  render() {
    return <div>
      {this.props.colors.map(color => <Color key={color.color} color={color.color} hex={color.hex}/>)}
    </div>;
  }
}
