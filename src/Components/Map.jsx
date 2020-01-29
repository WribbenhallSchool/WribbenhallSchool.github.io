import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_KEY;

const contentString = '<div style="padding-right: 10px; padding-bottom: 15px; text-align: center">' 
                        + '<p style="margin-bottom: 5px; margin-top: 3px">Wribbenhall School</p>' 
                        + '<a href="https://www.google.com/maps/place/Wribbenhall+School/@52.3843597,-2.305272,17z/data=!3m1!4b1!4m5!3m4!1s0x48708b322b700475:0x2cd59b2b03b491e5!8m2!3d52.3843597!4d-2.3030833" target="_blank" rel="noopener noreferrer" >'
                            + 'Open in google maps'
                        + '</a>'
                        + '</div>';


class Map extends Component {
    static defaultProps = {
        center: {
            lat: 52.3844956,
            lng: -2.3029055
        },
        zoom: 15
    };
    renderMarkers(map, maps) {
        let marker = new maps.Marker({
            position: this.props.center,
            map,
            title: 'Hello World!'
        });
        let infowindow = new maps.InfoWindow({
            content: contentString
        });
        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
        infowindow.open(map, marker); //Open by default
    }

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
                onGoogleApiLoaded={({map, maps}) =>
                    this.renderMarkers(map, maps)
                }
                options={this.getMapOptions}
            />
        );
    }
}
 
export default Map;