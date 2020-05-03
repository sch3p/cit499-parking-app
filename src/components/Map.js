// require('dotenv').config();
import React, { useState } from 'react';
import { Button, Container, Row, Col, Card} from 'react-bootstrap';

// Google Map React
import GoogleMapReact from 'google-map-react';
// import Circle from './Circle';
import Marker from './Marker';

import {usePosition} from '../hooks/getPosition';
import { Geofence } from './GeoFence';
import InfoName from './InfoName';


function Map() {

    // error handling
    const [error, setError] = useState(null);

    // hitbox color
    // const [color, setColor] = useState("red");

    const [filter, toggleFilter] = useState(false);

    const [inGarage, setInGarage] = useState({})

    const position = usePosition();

    // all coords for markers listed on map
    const markerLocations = {
        gatewayCoords : [39.775345, -86.169054],
        blackfordCoords : [39.775125, -86.170608],
        vermontCoords : [39.774049, -86.177187],
        barnhillCoords : [39.772540, -86.178207],
        riverwalkCoords : [39.769973, -86.173694]
    }

    // filter out only et/it garages on map
    const filterMarkerLocations = Object.fromEntries(Object.entries(markerLocations).filter(entry => {
        if(filter) {
            return (entry[0] === 'gatewayCoords' || entry[0] === 'blackfordCoords');
        } else return true;
    }))

    const insideGarage = (name, inside) => {
        setInGarage({
            ...inGarage,
            [name]: inside
        })
    }

    const defaultCoords = [39.773309, -86.174698]

    // map teleport
    const [teleport, setTeleport] = useState(defaultCoords);

    // on arrival
    // const [arrive, setArrive] = React.useState(false);

    const camelToName = (camelCase) => camelCase
        .replace(/([A-Z])/g, (match) => ` ${match}`)
        .replace(/^./, (match) => match.toUpperCase());

    const mapMarkers = Object.entries(filterMarkerLocations).map( ([name, [lat, long]]) => {
        const fence = new Geofence(lat, long, .0001);
        
        return <Marker
                    lat = {lat}
                    lng = {long}
                    name = {camelToName(name)}
                    inside = {fence.inside(position.latitude, position.longitude)}
                    isInside = {insideGarage}
                />
    });

    const info = Object.entries(insideGarage).map(([name, inside]) => {
        if(inside) {
            const lastIndex = name.lastIndexOf( ' ' );
            const garageName = name.substring(0, lastIndex);
            return <InfoName name={ garageName }/>;
        }
    });

    const handleFilterToggle = event => {
        toggleFilter( event.target.checked )
    };


    const center = {
        width: "50%",
        margin: "auto",
        padding: "20px",
    }

    // const arrived = false;

    return (
        <div style = {center}>
            <h1>* good luck finding a spot. nerd.</h1><br/>
            <Container fluid>
                <Row>
                    <Col>
                        <br/>
                        <div>
                                <h4 className="text-center">Teleportation Devices</h4>
                                <input type="checkbox" onClick={ event => handleFilterToggle(event)} id="filter" name="filter" value="filter"/>
                                <label for="filter">Filter by IT/ET</label>
                                <Button variant = "primary" size = "lg" onClick = { () => setTeleport( markerLocations['gatewayCoords']) } block>Gateway Garage</Button>
                                <Button variant = "primary" size = "lg" onClick = { () => setTeleport( markerLocations['vermontCoords']) } block>Vermont Garage</Button>
                                <Button variant = "primary" size = "lg" onClick = { () => setTeleport( markerLocations['blackfordCoords']) } block>Blackford Garage</Button>
                                <Button variant = "primary" size = "lg" onClick = { () => setTeleport( markerLocations['barnhillCoords']) } block>Barnhill Garage</Button>
                                <Button variant = "primary" size = "lg" onClick = { () => setTeleport( markerLocations['riverwalkCoords']) } block>Riverwalk Garage</Button>
                                <br/>
                            </div>
                    </Col>
                    <Col>
                        <div style={{height: "600px", width: "600px", margin: "auto", borderStyle: "double", borderWidth: "20px"}}>
                            <GoogleMapReact
                                bootstrapURLKeys = {{key: process.env.REACT_APP_GMToken}}
                                // defaultCenter = {[teleport.x, teleport.y]}
                                defaultZoom = {15.5}
                                center = {teleport}
                            >
                                {mapMarkers}
                            </GoogleMapReact>
                        </div>
                        
                    </Col>
                    <Col>
                        {info}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Map;