import React, { Component } from 'react'
import { Text, TouchableWithoutFeedback } from 'react-native'
import { Container, Content, List, ListItem } from 'native-base';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import ProfileScreen from '../Profile/ProfileScreen';
import AboustScreen from '../About/AboutScreen';
import DrawerHeader from '../../components/DrawerHeader'

class HomeScreen extends Component {
    render() {
        return (
            <Container>
                <DrawerHeader />
                <Content>
                    <List>
                        <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('Profile')}>
                            <ListItem>
                                <Text>Profile</Text>
                            </ListItem>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('About')}> 
                            <ListItem>
                                <Text>About</Text>
                            </ListItem>
                        </TouchableWithoutFeedback>
                    </List>
                </Content>
            </Container>
        )
    }
}

const stack = createStackNavigator({
    Home: {screen: HomeScreen,
        navigationOptions:()=>({
            header: null
        })
    },
    Profile: {screen: ProfileScreen,
        navigationOptions: () => ({
            title: `Profile Screen`,
            disableGestures: true
        }),
    },
    About: {screen: AboustScreen,
        navigationOptions: () => ({
            header: null,
            drawerLockMode: 'locked-close'
        }),
    }
})

export default createAppContainer(stack)