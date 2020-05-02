import React from 'react';
import { NavLink } from "react-router-dom";
// Bootstrap Depends
import { Navbar, Image, Button } from 'react-bootstrap';
import fire from '../firebase/Fire';
import { useSelector } from 'react-redux';

const Navi = () => {

    const signOut = () => {
        fire.auth().signOut().then( () => {
            // sign out success
        }).catch( () => {
            // sign out error
        })
    }

    const signedIn = useSelector(state => state.signedIn);
    const user = useSelector(state => state.realUser.name);

    return (

        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink exact to="/">
                <Navbar.Brand>
                    <Image
                        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI0MDBweCIgaGVpZ2h0PSI0MDBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDQwMCA0MDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPiAgPGltYWdlIGlkPSJpbWFnZTAiIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB4PSIwIiB5PSIwIgogICAgaHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFaQUFBQUdRQVFNQUFBQzZjYVNQQUFBQmRXbERRMUJwWTJNQUFDaVJwWkN4U3dKaEdNWWYKdFNqTWNpaW9vZUVHYVFpRnNLV3hiQkJDUk13Z3E4VTc3elM0MCtQdUpLS3hvZFhCcGFJbGkvNkQycUovSUFpQ2FtcW81b2FDQ0VLdQo1L01FSVhUcVBkN3YvZkY4Ny92ZDl6MkF2NjRyaGowd0J4Z1Z4OG9tRTlKNmZrTWFla0VRa3hoaitncUtiUzVsTWluMGphOEgrRVM5Cmo0bXordmYxakpHaWFpdUFiNWk4b0ppV1ExNGtwM2NjVTNDZFBLR1VDMFh5R1RscThZTGtPNkhMSHI4SkxubjhMZGpLWlpjQmY0Z3MKbFR5T0NwWTlGbStSbExKbGtIVnl4TkJyU3VjKzRpVWh0YksyeWpyZFRodFpKSkdBQkJrMWJFT0hneGhyaFo3MW5vdTM1OUtvY2tiaAphbUlYRmlkS0tITTJTclhHVTFWV2picktUMmNIUTNqLzExTmJtNDk3ZndpdEFJT3ZydnM1Q3d3ZEE2MEQxLzA1ZGQxV0V3ZzhBVGVOCjdueTFRVHZmcWRlN1d1UUVDTzhEbDlkZFRUNEhydWp4MUxOWnNBcHRLY0QwYXhyd2NRR001b0Z4ZWgzYy9PKys1M2RuSDgxSElMY0gKcEc2Qnd5TmdodjNoclYvZ2luU2JOZkExRndBQUFDQmpTRkpOQUFCNkpnQUFnSVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQQpGM0NjdWxFOEFBQUFCbEJNVkVYZ1p3ci8vLy8zTXM5bUFBQUFBV0pMUjBRQi93SXQzZ0FBQUFkMFNVMUZCK01NQndvSExRTXFXVkFBCkFBQXFTVVJCVkhqYTdjRXhBUUFBQU1LZzlVL3Rid2FnQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUlBM1Q3QUFBWlJCR0Z3QUFBQWwKZEVWWWRHUmhkR1U2WTNKbFlYUmxBREl3TVRrdE1USXRNRGRVTVRVNk1EYzZORFV0TURVNk1EQnRNYU9qQUFBQUpYUkZXSFJrWVhSbApPbTF2WkdsbWVRQXlNREU1TFRFeUxUQTNWREUxT2pBM09qUTFMVEExT2pBd0hHd2JId0FBQUNaMFJWaDBhV05qT21OdmNIbHlhV2RvCmRBQk9ieUJqYjNCNWNtbG5hSFFzSUhWelpTQm1jbVZsYkhtbm12Q0NBQUFBSFhSRldIUnBZMk02WkdWelkzSnBjSFJwYjI0QWMxSkgKUWlCaWRXbHNkQzFwYnVPRnljVUFBQUFBU1VWT1JLNUNZSUk9IiAvPgo8L3N2Zz4K"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="test React logo"
                        roundedCircle
                    /> {' '}
                    Park that Bih'
                </Navbar.Brand>
            </NavLink>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <NavLink exact to="/map">
                                <Button variant="primary" size="sm">Definately not the Map</Button>
                            </NavLink>
                        </li>
                        {signedIn ? 
                        <li class="nav-item">
                            <Button variant="danger" size="sm" onClick={signOut}>Refund 1/2 Soul?</Button>
                            <span class="text-dark">{user}</span>
                        </li> :
                        <li class="nav-item">
                            <NavLink exact to="/signin">
                                <Button variant="success" size="sm">Sign In</Button>
                            </NavLink>
                        </li>
                        }                        
                    </ul>
                </div>
            </nav>
        </div>

    );

}

export default Navi;