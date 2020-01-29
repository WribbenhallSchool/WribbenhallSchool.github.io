import React from 'react';

function Files(props) {
    return (
        <div className="file-container card" id={props.id}>
            <h3>{props.folder}</h3>
            
            { props.files ? null : <p>Loading files...</p> } 

            <ul id={props.folder + "-list"}>
                { props.files ? props.files.map(file =><li key={file[2]} id={"file-" + file[2]}> <a href={file[1]}>{file[0]}</a></li> ) : null } 
            </ul>
        </div>
    )
}

export default Files;