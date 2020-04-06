import React from 'react';

function ImageContainer(props){
    return(
        <div className="image-container">
            <h3>{props.title}</h3>
            <h4>{props.description}</h4>
            { props.images ? props.images.map( image => 
                <img 
                    src={image[0]} 
                    alt=" " 
                    key={image[1]}
                    onClick={props.handleImgClick}
                    onLoad={props.imageLoaded} 
                    className="gallery-image"
                />
                ) : <img src={require("../../Images/spinner.gif")} alt="Loadin..." className="loading"/>
            }
        </div>
    );
}

export default ImageContainer;