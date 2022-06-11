import React, { Component } from 'react';
import styled from 'styled-components';
import { AiFillInfoCircle, AiFillCloseCircle } from 'react-icons/ai';
import { connect } from 'react-redux';
import { actionToggleCompleteTask, actionUpdateDescription } from '../../redux/actions';
import Button from '../Button';

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

  .description,
  .description-area {
    width: 891px;
    height: 287px;

    padding: 19px 30px;
    margin: 30px 0;

    border-width: 5px 0px;
    border-style: solid;
    border-color: ${(props) => (props.isComplete ? '#12CC3B' : '#AA2C2C')};
    border-radius: 30px;

    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    background-color: ${(props) =>
      props.editDescription ? '#0F110F' : 'transparent'};
    color: #fff;
    resize: none;
  }

  .div-description {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

class Task extends Component {
  state = {
    textDescription: '',
    showDescription: false,
    editDescription: false,
  };

  componentDidMount() {
    const { description } = this.props;
    this.setState({ textDescription: description });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  ToggleShowDescription = () => {
    const { showDescription } = this.state;

    this.setState({ showDescription: !showDescription });
  };

  ToggleEditDescription = () => {
    const { editDescription } = this.state;
    if (!editDescription) {
      document
        .querySelector('#root > main > div > div.div-description > textarea')
        .focus();
    }

    this.setState({ editDescription: !editDescription });
  };

  saveDescriptionInStore = () => {
  const { handleUpdateDescriptionTask, id} = this.props;
  const {editDescription, textDescription} = this.state;
  console.log(editDescription);
  if (editDescription) {
    handleUpdateDescriptionTask(id, textDescription)
  }
  }

  render() {
    const { id, title, isComplete, handleCompleteTask } =
      this.props;
    const { showDescription, editDescription, textDescription } = this.state;
    return (
      <Container
        onDoubleClick={() => handleCompleteTask(id)}
        isComplete={isComplete}
        editDescription={editDescription}
      >
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
          <div className="div-description">
            <textarea
              readOnly={!editDescription}
              className="description-area"
              name="textDescription"
              onChange={this.handleChange}
              value={textDescription}
            />

            <Button onClick={() => {
              this.saveDescriptionInStore()
              this.ToggleEditDescription()
              }}>
              {editDescription ? 'Salvar' : 'Editar'}
            </Button>
          </div>
        )}
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleCompleteTask: (id) => dispatch(actionToggleCompleteTask(id)),
  handleUpdateDescriptionTask: (id, description) => dispatch(actionUpdateDescription(id, description)),
});

export default connect(null, mapDispatchToProps)(Task);
