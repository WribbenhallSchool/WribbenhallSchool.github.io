import React, { Component } from "react";

import Employee from './Employee';

class Staff extends Component {

    constructor(props){
        super(props);

        this.state = {
            Vacancies : null
        };

    }

    //Gets folder stored within /Vacancies
    getFolders = async (url) => {
        await fetch(url)
        .then(response => {
            if(response.ok) return response.json();
            else throw new Error("No vacancies")
        })
        .then(json => {
            let Vacancies = [];
            let tempFiles = [];
            //Gets all the files stored within each folder within /Vacancies
            for (let folder of json){
                this.getFolderFiles(folder.url, Vacancies, tempFiles, folder)
            }
            this.setState({ Vacancies: Vacancies });
        })
        .catch((error) => {
            console.clear();
        });
    }

    getFolderFiles = async (url, Vacancies, tempFiles, folder) => {
        fetch(url)
        .then(response => {
            if(response.ok) return response.json();
        }).then(json => {
            for (let file of json){
                tempFiles.push({
                    name: file.name,
                    url: file.download_url
                });
            }
            Vacancies.push({Name: folder.name, Files: tempFiles})
            tempFiles = [];
        })
        .catch((error) => {
            console.log(error)
        });
    }


    componentDidMount(){
        //this.getFolders("https://api.github.com/repos/EllisCWells/WribbenhallFiles/contents/Vacancies"); 
    }

    //Add link to github incase it messes up

    render(){
        return (
            <React.Fragment>
                <h2 style={{textAlign: "center"}}>Our Staff and vacancies</h2>
                <div className="staff-container">
                    <Employee name="Ellis Wells" img={require("../../Images/EllisWells.png")} statement="I have completed a Post Experience Diploma in Psychology. I have a passion to work with children with additional needs and understand that their environment, interactions and attachment with others has a big impact on their learning." />
                    <Employee name="Sally Wells" img={require("../../Images/SallyWells.png")} statement="I am a Qualified Learning Support Assistant, experienced in SEN Learning Support. I have the patience to support children in their understanding and scaffold their learning." />
                    <Employee name="Amy Wells" img={require("../../Images/AmyWells.jpg")} statement="I have completed a Certificate of Higher Education in Psychology. I have a strong understanding of how to communicate with children, especially those with additional needs and am always looking for exciting and enriching ways to support children in relaxation and play." />
                </div>
                <div className="card">
                    <h3>Vacancies</h3>
                    {
                        this.state.Vacancies ? this.state.Vacancies.map((Folder, i) => 
                            <div key={4920 + i}>
                                <h4>{Folder.Name}</h4>
                                {
                                    <ul>
                                        {
                                            Folder.Files.map((file, x) => 
                                                <li key={43240 + x}><a href={file.url} download><h4>{file.name}</h4></a></li>
                                            )
                                        }
                                    </ul>
                                }
                            </div>
                        ) : <h4>We currently have no Vacancies, please check again soon.</h4>
                    }
                </div>
                <div style={{clear: "both"}}></div>
                <a href="https://www.linkedin.com/in/david-c-b491b6106/" rel="noopener noreferrer" target="_blank"><h4 id="trademark">Website made by David Cottrell</h4></a>
            </React.Fragment>
        );
    }

}
 
export default Staff;