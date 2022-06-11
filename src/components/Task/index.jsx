import React, { Component } from 'react';
import styled from 'styled-components';
import { AiFillInfoCircle, AiFillCloseCircle } from 'react-icons/ai';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 993px;

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

  .btn {
    background-color: Transparent;
    background-repeat: no-repeat;
    border: none;
  }

  svg {
    width: 72px;
    height: 72px;

    color: ${(props) => (props.isComplete ? '#12CC3B' : '#AA2C2C')};
  }

  .description {
    width: 891px;
    height: 287px;

    padding: 19px 30px;
    margin-top: 30px;

    border-width: 5px 0px;
    border-style: solid;
    border-color: ${(props) => (props.isComplete ? '#12CC3B' : '#AA2C2C')};
    border-radius: 30px;

    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
  }
`;

export default class Task extends Component {
  state = { showDescription: false };

  ToggleShowDescription = () => {
    const { showDescription } = this.state;

    this.setState({ showDescription: !showDescription });
  };

  render() {
    const { title, description, isComplete } = this.props;
    const { showDescription } = this.state;
    return (
      <Container onDoubleClick={() => console.log('click')} isComplete={isComplete}>
        <div className="div-title">
          <p className="title">{title}</p>
          <div className="icons">
            <button
              className="btn"
              type="button"
              onClick={this.ToggleShowDescription}
            >
              <AiFillInfoCircle />
            </button>
            <button className="btn" type="button">
              <AiFillCloseCircle />
            </button>
          </div>
        </div>

        {showDescription && (
          <div className="descriprion">
            <p className="description">{description}</p>
          </div>
        )}
      </Container>
    );
  }
}
