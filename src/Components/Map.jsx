import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_KEY;

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 52.3844525,
            lng: -2.3047612
        },
        zoom: 15
    };

    getMapOptions(maps){
        return {
            streetViewControl: true,
            scaleControl: false,
            fullscreenControl: true,
            mapTypeControl: true,
            styles: [{
                featureType: "poi.business",
                elementType: "labels",
                stylers: [{
                    visibility: "on"
                }]
            }],
            mapTypeId: maps.MapTypeId.roadmap,
            mapTypeControlOptions: {
                style: maps.MapTypeControlStyle.HORIZONTAL_BAR,
                position: maps.ControlPosition.TOP_LEFT,
                mapTypeIds: [
                    maps.MapTypeId.ROADMAP,
                    maps.MapTypeId.SATELLITE,
                    maps.MapTypeId.HYBRID
                ]
            },
            zoomControl: true,
            clickableIcons: true
        }
    }

    render() { 
        return ( 
            <GoogleMapReact
                bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                yesIWantToUseGoogleMapApiInternals
                options={this.getMapOptions}
            />
        );
    }
}
 
export default Map;