import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { actionAddTask } from '../../redux/actions';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 8px solid #12cc3b;
  border-radius: 30px;

  width: 993px;
  height: 290px;

  font-size: 64px;

  color: #fff;

  label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  input#input-add-task {
    width: 590px;
    height: 71px;

    margin-right: 64px;

    background: #324035;
    border-bottom: 5px solid #ffffff;
    border-radius: 20px;

    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 58px;
    /* identical to box height */

    display: flex;
    align-items: flex-start;

    color: #ffffff;
  }

  input#input-add-task:focus {
    background: #324035;
    border-bottom: 5px solid #ffffff;
    border-radius: 20px;
  }

  input[type='button'] {
    width: 248px;
    height: 103px;

    background: #12cc3b;
    border: 5px solid #ffffff;
    border-radius: 20px;

    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;

    color: #ffffff;
  }

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

class AddTask extends Component {
  state = {
    inputAddTask: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { inputAddTask } = this.state;
    const { handleAddTask } = this.props;

    return (
      <Wrapper>
        <label htmlFor="input-add-task">
          Adicionar Tarefa
          <div>
            <input
              type="text"
              id="input-add-task"
              name="inputAddTask"
              onChange={this.handleChange}
              value={inputAddTask}
            />
            <input type="button" value="adicionar" onClick={() => handleAddTask(inputAddTask)}/>
          </div>
        </label>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleAddTask: (text) => dispatch(actionAddTask(text)),
});

export default connect(null, mapDispatchToProps)(AddTask);
