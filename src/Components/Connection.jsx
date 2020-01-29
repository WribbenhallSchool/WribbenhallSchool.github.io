import React, { Component } from 'react';
import Notifications, {notify} from 'react-notify-toast'; //Toast notifications


class Connection extends Component {

    componentDidMount(){
        window.addEventListener('online',  this.checkConnection);
        this.checkConnection();
    }

    componentWillUnmount(){
        window.removeEventListener('online',  this.checkConnection);
    }


    checkConnection = (event) => {
        navigator.onLine ? this.isOnline = true : this.isOnline = false;
        if (!this.isOnline){
            notify.show("Error loading content, please check your internet connection.", "error", 2500);
        }
    }

    render() { 
        return ( 
            <Notifications />
        );
    }
}
 
export default Connection;