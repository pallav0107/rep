import React, { Component } from 'react'
import { FormMenu } from '../../components/FormMenu'
import { reduxForm } from 'redux-form';
import { Flex } from 'grid-styled';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

export class FormMenuContainer extends Component {
  render() {
    return (
      <Flex>
        <FormMenu />
      </Flex>
    )
  }
}

const mapStateToProps = state => ({

});


const FormMenuContainer1 = compose(
  withRouter,
  connect(
    mapStateToProps,
    null
  ),
  reduxForm({
    form: 'UserHome',
    destroyOnUnmount: false,
  })
)(FormMenu);

export default FormMenuContainer1;
