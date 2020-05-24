import React, { Component } from 'react';
import Notifications, {notify} from 'react-notify-toast'; //Toast notifications

class Calendar extends Component{

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            iframeHeight: 0
        };

        window.innerWidth <= 565 ? this.state.iframeHeight = 450 : this.state.iframeHeight = 800;
        window.addEventListener('resize', this.handleResize);
        window.addEventListener('online',  this.checkConnection);
    }

    checkConnection = (event) => {
        navigator.onLine ? this.isOnline = true : this.isOnline = false;
        if (!this.isOnline){
            notify.show("Error loading calendar, please check your internet connection.", "error", 2500);
        }
    }

    componentDidMount(){
        this.checkConnection();
        document.getElementById("iframe-calendar").style.visibility = "hidden";
        document.getElementById("iframe-calendar").onload = () => {
            this.setState({loading: false});
            document.getElementById("iframe-calendar").style.visibility = "visible";
        }
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => window.innerWidth <= 565 ? this.setState({iframeHeight: 450}) : this.setState({iframeHeight: 800});
    

    render(){
        const iframeSmall = '<iframe src="https://calendar.zoho.com/embed/748f5c43c7789fe546b5876e4af8d47d398e069addce1554fadeafb31c96bbdd3cd05790438b3f96e598e8944b2a3b8c?title=Wribbenhall School&type=1&l=en&tz=GMT&sh=%5B1%2C1%2C0%5D&v=2" id="iframe-calendar" frameborder="0" scrolling="no" style="width: 100%; height:' + this.state.iframeHeight + 'px; "></iframe>';
        console.clear();
        return(
            <React.Fragment>
                <Notifications />
                <h2>Our Calendar</h2>
                {this.state.loading ? <img src={require("../../Images/spinner.gif")} alt="Loadin..." className="loading"/> : null }
                <div dangerouslySetInnerHTML={ {__html: iframeSmall } }/>
            </React.Fragment>
        );
    }


}


export default Calendar;