import React, { Component } from 'react'

import styled from 'styled-components'

import AddTask from './components/AddTask'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 1080px;
  height: 1920px;

  padding: 43px;
  
  background: #031a04;
  color: #fff;
`

export default class App extends Component {
  render() {
    return (
      <Main>
        <AddTask />
      </Main>
    )
  }
}
