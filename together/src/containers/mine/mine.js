import React, {Component} from 'react';
import {connect} from 'react-redux';
import stylesCommon from '../../../assets/css/common'
import {
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Button,
    TouchableHighlight,
} from 'react-native';
import NavigationBar from '../../common/navigationBar'
import ChooseTwo from './ChooseTwo'
import BankChoose from '../bankChoose/bankChoose'

import * as RouteType from '../../constants/routeType';

class Mine extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chooseSign: [],
        };
        this.routerToChooseTwo = this.routerToChooseTwo.bind(this);
    }

    componentDidMount() {


    }

    routerToChooseTwo() {
        this.props.navigator.push({
            component: ChooseTwo,
            params: {
                callback: (msg) => {
                    console.log('fmaoeijfoef', msg)
                    this.setState({
                        chooseSign: msg,
                    })
                }
            }
        })
    }

    render() {
        const {navigator} = this.props;
        return (
            <View style={stylesCommon.container}>
                <NavigationBar
                    title={'我的'}
                    navigator={navigator}
                    leftButtonConfig={{
                        type: 'string',
                        title: '设置',
                        onClick: () => {

                        }
                    }}
                    rightIconFont='&#xe617;'
                    rightButtonConfig={{
                        type: 'font',
                        onClick: () => {
                        }
                    }}/>
                <TouchableHighlight onPress={() => {
                    this.props.navigator.push({
                        component: BankChoose,
                    })
                }}>
                    <Text style={{padding: 20}}>银行地址选择</Text>
                </TouchableHighlight>
                <View style={{marginTop: 30, justifyContent: 'space-around'}}>
                    <Text>选择状态 {this.state.chooseSign}</Text>
                    <View
                        style={{flexDirection: 'row'}}
                    >
                        {
                            this.state.chooseSign.includes('one') ?
                                <TouchableOpacity onPress={() => {
                                    this.routerToChooseTwo();
                                }}>
                                    <View
                                        style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: 6,
                                            borderWidth: 1,
                                            margin: 20,
                                            width: 40,
                                            height: 20,
                                            borderColor: 'gray',
                                        }}>
                                        <Text
                                            style={{
                                                color: 'gray'
                                            }}
                                        >有钱</Text>
                                    </View>
                                </TouchableOpacity>

                                : null
                        }
                        {
                            this.state.chooseSign.includes('two') ?
                                <TouchableOpacity onPress={() => {
                                    this.routerToChooseTwo();
                                }}>
                                    <View
                                        style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: 6,
                                            borderWidth: 1,
                                            margin: 20,
                                            width: 40,
                                            height: 20,
                                            borderColor: 'gray',
                                        }}>
                                        <Text
                                            style={{
                                                color: 'gray'
                                            }}
                                        >没钱</Text>
                                    </View>
                                </TouchableOpacity>
                                : null
                        }
                        {
                            this.state.chooseSign.includes('three') ?
                                <TouchableOpacity onPress={() => {
                                    this.routerToChooseTwo();
                                }}>
                                    <View
                                        style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: 6,
                                            borderWidth: 1,
                                            margin: 20,
                                            width: 40,
                                            height: 20,
                                            borderColor: 'gray',
                                        }}>
                                        <Text
                                            style={{
                                                color: 'gray'
                                            }}
                                        >回家</Text>
                                    </View>
                                </TouchableOpacity>
                                : null
                        }
                        {
                            this.state.chooseSign.includes('four') ?
                                <TouchableOpacity onPress={() => {
                                    this.routerToChooseTwo();
                                }}>
                                    <View
                                        style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: 6,
                                            borderWidth: 1,
                                            margin: 20,
                                            width: 40,
                                            height: 20,
                                            borderColor: 'gray',
                                        }}>
                                        <Text
                                            style={{
                                                color: 'gray'
                                            }}
                                        >过年</Text>
                                    </View>
                                </TouchableOpacity>
                                : null
                        }
                    </View>
                    <Button
                        title={'筛选'}
                        color={'red'}
                        onPress={() => {
                            this.routerToChooseTwo();
                        }}
                    />
                </View>

            </View>

        );
    }
}


function mapStateToProps(state) {
    console.log('------ state', state);
    return {}
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Mine);
