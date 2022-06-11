import React, { Component } from 'react';
import styled from 'styled-components';
import { AiFillInfoCircle, AiFillCloseCircle } from 'react-icons/ai';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 993px;
  height: 121px;

  padding: 25px 51px;
  margin-top: 30px;

  background: #324035;
  border-width: 5px 0px;
  border-style: solid;
  border-color: ${(props) => (props.isComplete ? '#12CC3B' : '#AA2C2C')};
  border-radius: 30px;

  .div-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 58px;
  }

  svg {
    width: 72px;
    height: 72px;

    color: ${(props) => (props.isComplete ? '#12CC3B' : '#AA2C2C')};
  }
`;

export default class Taks extends Component {
  state = { showDescription: false };

  render() {
    const { title, description, isComplete } = this.props;
    const { showDescription } = this.state;
    return (
      <Container isComplete={isComplete}>
        <div className="div-title">
          <p className="title">{title}</p>
          <div className="icons">
            <AiFillInfoCircle />
            <AiFillCloseCircle />
          </div>
        </div>

        {showDescription && <p className="description">{description}</p>}
      </Container>
    );
  }
}
