import React, {Component} from "react";
import { Header, Button, Left, Body, Right, Icon, Text } from 'native-base';
import { withNavigation } from 'react-navigation';

class DrawerHeader extends Component{
    render(){
        return(
            <Header>
                <Left>
                    <Button onPress={() => this.props.navigation.openDrawer()} transparent>
                        <Icon name="menu" style={{fontSize: 24,}} />
                    </Button>
                </Left>
                <Body>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
                        Home
                    </Text>
                </Body>
                <Right />
            </Header>
        )
    }
}

export default withNavigation(DrawerHeader);