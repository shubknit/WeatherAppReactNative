import React, { Component } from 'react';
import SearchLocation  from './SearchLocation';

export default class HomePage extends Component {
  constructor(){
    super();
  }

  render(){
      const { navigate } = this.props.navigation;
      console.log('')
      return (
          <SearchLocation navigate = { navigate }/>
      )
  }
}