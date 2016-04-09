import React from 'react';

export default class TodoList extends React.Component {
  render() {
    return <section className="main">
          <ul className="todo-list">
            {this.props.todos.map(item =>
              <li className="active" key={item.get('text')}>
                <div className="view">
                  <input type="checkbox" className="toggle" />
                  <label htmlFor="todo">
                    {item.get('text')}
                  </label>
                  <button className="destroy"></button>
                </div>
              </li>
            )}
          </ul>
        </section>
  }
};
