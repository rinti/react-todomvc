import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';


export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return <input type="text"
                  className="edit"
                  autoFocus={true} />
  }
};
