import React, { Component } from "react";
import Connection from "../Connection";

import Files from './Files';

import './policies.css';


class Polices extends Component {

    constructor(props){
        super(props);

        this.fileKey = 0;
        this.allFiles = [];

        this.state = {
            nonFound : false,
            searching : false,
            numOfResults : 0, 
            Ofsted : null,
            Safeguarding : null,
            Policies : null
        };

    }

    // Get files from url and stores them in the state
    getFiles = async (url, name) => {
        await fetch(url)
        .then(response => {
            if(response.ok) return response.json();
        }).then(json => {
            let tempFileArray = [];
            for(let i = 0; i < json.length; i++){
                tempFileArray.push([json[i].name, json[i].download_url, this.fileKey]);
                this.allFiles.push([json[i].name, json[i].download_url, this.fileKey, name]);
                this.fileKey += 1;
            }
            this.setState({ [name] : tempFileArray });
        });
    }
    
    componentDidMount(){
        //Provide URL of files and state object to store then under
        this.getFiles("https://api.github.com/repos/EllisCWells/WribbenhallFiles/contents/Documents/Ofsted", "Ofsted"); 
        this.getFiles("https://api.github.com/repos/EllisCWells/WribbenhallFiles/contents/Documents/Safeguarding", "Safeguarding");
        this.getFiles("https://api.github.com/repos/EllisCWells/WribbenhallFiles/contents/Documents/School policy documents", "Policies");
    }


    handleSearch = (event) => {
        const input = event.target.value.toUpperCase();

        input !== "" ? this.setState({searching : true}) : this.setState({searching : false});

        let filename = "";
        let fileID = "";

        let foundOfstedFiles = 0;
        let foundSafegaurdingFiles = 0;
        let foundPolicyFiles = 0;

        this.numOfResults = 0;

        //Loop through each file from all folders
        this.allFiles.forEach((file) => {
            filename = file[0].toUpperCase(); //ignore case
            fileID = "file-" + file[2];
            const fileElem = document.getElementById(fileID);
            if(filename.includes(input)){
                fileElem.style.display = "list-item"; // Show file if it is found
                switch (file[3]) {
                    case "Ofsted":
                        foundOfstedFiles += 1;
                        break;
                    case "Safeguarding":
                        foundSafegaurdingFiles += 1;
                        break;
                    case "Policies":
                        foundPolicyFiles += 1;
                        break;
                    default:
                        break;
                }
                this.numOfResults += 1;
            }else{
                fileElem.style.display = "none"; // Dont show file if its not found
            }
        });

        !foundOfstedFiles ? document.getElementById('Ofsted').style.display = "none" : document.getElementById('Ofsted').style.display = "block";
        !foundSafegaurdingFiles ? document.getElementById('Safeguarding').style.display = "none" : document.getElementById('Safeguarding').style.display = "block";
        !foundPolicyFiles ? document.getElementById('SchoolPolicies').style.display = "none" : document.getElementById('SchoolPolicies').style.display = "block";
            
        if(this.numOfResults === 0){
            document.getElementById("fileSearch").classList.add("filesNotFound");
            this.setState({nonFound : true});
        }else{
            document.getElementById("fileSearch").classList.remove("filesNotFound");
            this.setState({nonFound : false});
        }
        this.setState({numOfResults : this.numOfResults})
    }

    render(){
        return(
            <React.Fragment>
                <Connection />
                <h2>Our Polices</h2>

                <input type="text" name="fileSearch" id="fileSearch" placeholder="search for a file..." onChange={this.handleSearch} autoComplete="off" autoCorrect="off"/>

                {this.state.searching && !this.state.nonFound ? <p>Results found: {this.state.numOfResults}</p> : null}

                {this.state.nonFound ? <p>No files found...</p> : null}

                <Files 
                    folder="Ofsted" 
                    files={this.state.Ofsted}
                    id="Ofsted"
                />

                <Files 
                    folder="Safeguarding" 
                    files={this.state.Safeguarding} 
                    id="Safeguarding"
                />

                <Files 
                    folder="School Policies" 
                    files={this.state.Policies} 
                    id="SchoolPolicies"
                />
                
            </React.Fragment>
        );    
    }

}

export default Polices;