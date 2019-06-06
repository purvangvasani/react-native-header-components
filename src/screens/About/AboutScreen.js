import React, { Component } from 'react'
import { Container, Content } from 'native-base';
import StackNavigator from '../../components/StackNavigator';

class AboutScreen extends Component {
    static navigationOptions = {
        drawerLockMode: 'locked-closed',
        disabledGestures: true
    
    };
    render() {
        return (
            <Container>
                <StackNavigator />
                <Content>

                </Content>
            </Container>
        )
    }
}

export default AboutScreen