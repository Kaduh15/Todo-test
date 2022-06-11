import React, { Component } from 'react';
import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #031a04;
`;

export default class App extends Component {
  render() {
    return <Main>App</Main>;
  }
}
