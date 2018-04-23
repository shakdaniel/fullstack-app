import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const createGoal = gql`
  mutation createGoal($name: String!, $resolutionId: String!) {
    createGoal(name: $name, resolutionId: $resolutionId) {
      _id
    }
  }
`;


class GoalForm extends Component {
  submitForm = () => {
    this.props
      .createGoal({
        variables: {
          name: this.name.value,
          resolutionId: this.props.resolutionId
        }
      })
      .then(() => {
        this.name.value = "";
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleSubmit = e  => {
    e.preventDefault();
    this.refs.form.reset();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} ref="form">
        <input type="text" ref={input => (this.name = input)} />
        <button onClick={this.submitForm} >Submit</button>
      </form>
    );
  };
}

export default graphql(createGoal, {
  name: "createGoal",
  options: {
    refetchQueries: ["Resolutions"]
  }
})(GoalForm);