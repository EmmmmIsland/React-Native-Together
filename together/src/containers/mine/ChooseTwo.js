import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Button,
    TouchableOpacity,
    DeviceEventEmitter
} from 'react-native';


export default class ChooseTwo extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            colorOne: 'black',
            colorTwo: 'black',
            colorThree: 'black',
            colorFour: 'black',
        }
    }

    render() {
        const {colorOne, colorTwo, colorThree, colorFour} = this.state;

        return (
            <View>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={() => {
                        if (colorOne == 'black') {
                            this.setState({
                                colorOne: 'red',
                            })
                        } else {
                            this.setState({
                                colorOne: 'black',
                            })
                        }
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
                                borderColor: colorOne,
                            }}>
                            <Text
                                style={{
                                    color: colorOne
                                }}
                            >有钱</Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => {
                        if (colorTwo == 'black') {
                            this.setState({
                                colorTwo: 'red',
                            })
                        } else {
                            this.setState({
                                colorTwo: 'black',
                            })
                        }
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
                                borderColor: colorTwo,
                            }}>
                            <Text
                                style={{
                                    color: colorTwo
                                }}
                            >没钱</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        if (colorThree == 'black') {
                            this.setState({
                                colorThree: 'red',
                            })
                        } else {
                            this.setState({
                                colorThree: 'black',
                            })
                        }
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
                                borderColor: colorThree,
                            }}>
                            <Text
                                style={{
                                    color: colorThree
                                }}
                            >回家</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        if (colorFour == 'black') {
                            this.setState({
                                colorFour: 'red',
                            })
                        } else {
                            this.setState({
                                colorFour: 'black',
                            })
                        }
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
                                borderColor: colorFour,
                            }}>
                            <Text
                                style={{
                                    color: colorFour
                                }}
                            >过年</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <Button
                    title={'确定'}
                    onPress={() => {
                        const chooseSign = [];
                        if (colorOne == 'red') {
                            chooseSign.push('one')
                        }

                        if (colorTwo == 'red') {
                            chooseSign.push('two')
                        }

                        if (colorThree == 'red') {
                            chooseSign.push('three')
                        }

                        if (colorFour == 'red') {
                            chooseSign.push('four')
                        }
                        console.log(chooseSign)


                        if (this.props.callback) {
                            this.props.callback(chooseSign)
                        }
                        this.props.navigator.pop();
                    }}
                />
            </View>

        );
    }
};

const styles = StyleSheet.create({
    icon: {
        height: 22,
        width: 22,
        resizeMode: 'contain'
    }
});