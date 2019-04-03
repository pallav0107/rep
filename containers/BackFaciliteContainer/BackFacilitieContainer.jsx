import React, { Component } from 'react'
import { BackFacilitie } from '../../components/BackFacilitie'
import { reduxForm } from 'redux-form';
import { Flex } from 'grid-styled';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

export class BackFacilitieContainer extends Component {
  render() {
    return (
      <Flex>
        <BackFacilitie />
      </Flex>
    )
  }
}

const mapStateToProps = state => ({
});

const BackFacilitieContainer1 = compose(
  withRouter,
  connect(
    mapStateToProps,
    null
  ),
  reduxForm({
    form: 'BackFacilitie',
    destroyOnUnmount: false,
  })
)(BackFacilitieContainer);

export default BackFacilitieContainer1;
