import React, {Component} from "react";
import { Header, Button, Left, Body, Right, Text } from 'native-base';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native'
import { BorderlessButton } from "react-native-gesture-handler";

class StackNavigator extends Component{
    render(){
        return(
            <Header style={{backgroundColor: 'white'}}>
                <Left style={{paddingLeft: 4,}}>
                    <BorderlessButton onPress={() => this.props.navigation.navigate('Home')} transparent>
                        <Icon name="arrow-left" style={{fontSize: 24, color: 'black'}} />
                    </BorderlessButton>
                </Left>
                <Body>
                    <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>
                        About Screen
                    </Text>
                </Body>
                <Right></Right>
            </Header>
        )
    }
}

export default withNavigation(StackNavigator);