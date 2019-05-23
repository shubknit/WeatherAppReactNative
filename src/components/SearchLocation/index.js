import React, { Component } from 'react';
import { View, TextInput, TouchableHighlight, Text } from 'react-native';
import { connect } from 'react-redux';
import { startSetForeCastData } from '../../actions/forecast';
import styles from './styles'; 



class SearchLocation extends Component {
  constructor(props){
      super(props);
      this.state = {
          text: ''
      }
  }

  onSubmit = () => {
   const userInput = this.state.text;
   const { navigate } = this.props;
   this.props.onSubmit(userInput, navigate);
  }  

  render() {
    return (
    <View style = {{ padding: 10 } }>
        <TextInput
         style = { styles.searchInput }
         placeholder = "search city"
         onChangeText = {(text) => this.setState({text})}   
        />
        <TouchableHighlight style = { styles.button }
        onPress = {this.onSubmit}>
            <Text style = {styles.buttonText}> Search </Text>       
        </TouchableHighlight>
       </View>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit : (location, navigate) => dispatch(startSetForeCastData(location, navigate))
    }
}

export default connect(undefined, mapDispatchToProps)(SearchLocation);
