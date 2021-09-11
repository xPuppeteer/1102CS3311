import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import firebase from 'firebase/app'
import 'firebase/auth'
import getUserData from '../getUserData'

export default class HomeScreen extends React.Component {
    state = {
        email: "",
        displayName: ""
    }

    componentDidMount() {
        const {email, displayName} = firebase.default.auth().currentUser
        getUserData();
        this.setState({email, displayName})
    }

    signOutUser = () => {
        firebase.default.auth().signOut()
    }
    render() {
        return <View style={styles.container}> 
            <Text>Welcome {this.state.displayName} </Text>

            <TouchableOpacity onPress={this.signOutUser}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View> 
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center" 
    }
        
    
})