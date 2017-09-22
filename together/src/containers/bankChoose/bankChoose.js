import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as RouteType from '../../constants/routeType';
import * as StaticColor from '../../constants/staticColor'
import stylesCommon from '../../../assets/css/common'
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    TouchableHighlight
} from 'react-native';
const {width, height} = Dimensions.get('window');

class BankChoose extends Component {

	constructor(props) {
	  super(props);
	  this.state = {

	  }
	}


  render() {

      return (
          <View>
              <TouchableHighlight onPress={()=>{
                  this.props.navigator.pop()
              }}>
              <Text style={{
                  marginTop:20,
                  width,
                  height:30,
                  backgroundColor:'yellow'
              }}>返回</Text>
              </TouchableHighlight>
          </View>
      );
    }
}
const styles = StyleSheet.create({

})

function mapStateToProps(state) {
    return {
        user: state.user,
    }
}

function mapDispatchToProps(dispatch) {
	return {

	};
}

export default connect(mapStateToProps, mapDispatchToProps)(BankChoose);
