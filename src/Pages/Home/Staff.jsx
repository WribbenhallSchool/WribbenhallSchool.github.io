import React, { Component } from "react";

import Employee from './Employee';

class Staff extends Component {

    constructor(props){
        super(props);

        this.state = {
            Vacancies : null
        };

    }

    // Get files from url and stores them in the state
    getFiles = async (url) => {
        console.log("getting files")
        await fetch(url)
        .then(response => {
            if(response.ok) return response.json();
        }).then(json => {
            if(json === undefined) return
            let Vacancies = [];
            let tempFiles = []
            let nonFound = false;
            for (let folder of json){
                fetch(folder.url)
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
            }            
            this.setState({ Vacancies: Vacancies });
        });
        
    }


    componentDidMount(){
        this.getFiles("https://api.github.com/repos/EllisCWells/WribbenhallFiles/contents/Vacancies"); 
    }



    render(){
        return (
            <React.Fragment>
                <h2 style={{textAlign: "center"}}>Our Staff</h2>
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
                                                <li key={43240 + x}><a href={file.url}><h4>{file.name}</h4></a></li>
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