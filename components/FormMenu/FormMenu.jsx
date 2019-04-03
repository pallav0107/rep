import React, { Component } from 'react'
import { Flex } from 'grid-styled';
import { Tab } from '@wdpui/react-gel';
import { SearchContainer,Tabes } from '../../style/style';
import  Facilities  from './Facilities';

export class FormMenu extends Component {
  constructor(props) {
    super(props)

      this.state = {
        value: 3,
      };
    
  }

  // handleChange = (event, value) => {
  //   this.setState({ value });
  // };

  render() { 
    return (
      <Flex>
        <SearchContainer>
          <Tabes activeTab={2} >
            <Tab label='Entities'>Entities</Tab>
            <Tab label='Assets'>Assets</Tab>
            <Tab label='Facilities' >
            <Facilities />
            </Tab>
            <Tab label='business Financials' >business Financials</Tab>
            <Tab label='Personal Financials' >Personal Financials</Tab>
            <Tab label='Summary'>Summary</Tab>
          </Tabes>
        </SearchContainer>
      </Flex>
    )
  }
}

export default FormMenu;
