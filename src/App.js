import React, { Component } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

import AddTask from './components/AddTask';
import Task from './components/Task';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 1080px;
  height: 1920px;

  padding: 43px;

  background: #031a04;
  color: #fff;
`;

class App extends Component {
  render() {
    const { ListTasks } = this.props;
    return (
      <Main>
        <AddTask />
        {ListTasks.map(task => (<Task key={task.id} {...task}/>))}
      </Main>
    );
  }
}

const mapStateToProps = (state) => ({
  ListTasks: state.reducerTasks,
});

export default connect(mapStateToProps)(App);
