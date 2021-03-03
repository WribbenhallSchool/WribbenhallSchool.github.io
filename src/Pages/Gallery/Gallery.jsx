import React, { Component } from 'react';
import Notifications, {notify} from 'react-notify-toast'; //Toast notifications

import ImageContainer from './ImageContainer';

import "./gallery.css";

class Gallery extends Component {

    constructor(props){
        super(props);

        this.loadedImgCount = 0;
        this.folderCount = 0;
        this.currentImages = [];
        
        this.state = {
            Animals : null,
            Hawkbatch : null,
            School : null,
            modalSrc : null
        };

        window.addEventListener('online',  this.checkConnection);
    }

    checkConnection = (event) => {
        navigator.onLine ? this.isOnline = true : this.isOnline = false;
        if (!this.isOnline){
            notify.show("Error loading images, please check your internet connection.", "error", 2500);
            let imageContainers = document.getElementsByClassName("image-container");
            for (let container of imageContainers) {
                container.style.visibility = "hidden";
            }
        }else{
            this.asynchronousFunction("https://api.github.com/repos/EllisCWells/WribbenhallFiles/contents/Images/Animals", "Animals");
            let imageContainers = document.getElementsByClassName("image-container");
            for (let container of imageContainers) {
                container.style.visibility = "visible";
            }
        }
    }


    // Get files from url and stores them in the state
    asynchronousFunction = async (url, name) => {
        try {
            await fetch(url)
            .then(response => {
                if(response.ok) return response.json();
            }).then(json => {
                let tempFileArray = [];
                for(let i = 0; i < json.length; i++)
                    tempFileArray.push([json[i].download_url, i]);
                this.setState({ [name] : tempFileArray });
                this.currentImages = tempFileArray;
            });
        } catch (error) {
            notify.show("An error occured, please refresh the page", "error", 2500);
        }
        

    }
        
    componentDidMount(){
        this.checkConnection();
    }

    handleImgClick = (event) => {
        this.setState({modalSrc : event.target.src})
        document.getElementById("myModal").style.display = "block";
        document.getElementsByTagName("html")[0].classList.add("stop-scroll");
    }

    handleModalBackgroundClick = () => {
        document.getElementById("myModal").style.display = "none";
        document.getElementsByTagName("html")[0].classList.remove("stop-scroll");
    }

    imageLoaded = (event) => {
        this.loadedImgCount++;

        const urls = [
            ["https://api.github.com/repos/EllisCWells/WribbenhallFiles/contents/Images/School", "School"], 
            ["https://api.github.com/repos/EllisCWells/WribbenhallFiles/contents/Images/Hawkbatch", "Hawkbatch"]
        ];

        if(this.loadedImgCount === this.currentImages.length && this.folderCount <= urls.length-1){
            this.asynchronousFunction( urls[this.folderCount][0], urls[this.folderCount][1] );
            this.loadedImgCount = 0;
            this.folderCount++;
        }
    }

    render() { 
        return ( 
            <React.Fragment>
                
                <Notifications />

                <h1>Gallery</h1>

                <ImageContainer 
                    images = {this.state.Animals}
                    title = "Our support animals"
                    handleImgClick={this.handleImgClick}
                    imageLoaded={this.imageLoaded} 
                />

                <ImageContainer 
                    images = {this.state.School}
                    title = "Our School"
                    handleImgClick={this.handleImgClick}
                    imageLoaded={this.imageLoaded} 
                />

                <ImageContainer 
                    images = {this.state.Hawkbatch}
                    title = "Wyre Forest"
                    description = "One of our commonly used local resources for outdoor activites"
                    handleImgClick={this.handleImgClick}
                    imageLoaded={this.imageLoaded} 
                />

                <div id="myModal" className="modal" onClick={this.handleModalBackgroundClick}>
                    <div className="modal-content">
                        <img src={this.state.modalSrc} alt="Error loading" />
                    </div>
                </div>
                
            </React.Fragment>
         );
    }
}
 
export default Gallery;