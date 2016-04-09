import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import TodoItem from './TodoItem';


export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return <section className="main">
          <ul className="todo-list">
            {this.props.todos.map(item =>
              <TodoItem text={item.get('text')} key={item.get('text')} />
            )}
          </ul>
        </section>
  }
};
