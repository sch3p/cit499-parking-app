import React from "react";
import fire from "../../firebase/Fire";
import { useSelector } from "react-redux";
// import { Redirect } from "react-router";
import { Link } from "react-router-dom";

function SignInPage() {

    const signedIn = useSelector( state => state.signedIn );

    const [value, setValues] = React.useState({
        email: "",
        password: ""
    });

    const handleChange = prop => event => {
        setValues({
            ...value,
            [prop]: event.target.value
        });
    }

    const onSubmit = () => {
        fire.auth().signInWithEmailAndPassword(value.email, value.password)
        .then( () => {
            setValues({
                email: "",
                password: ""
            });
        }).catch( (error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
        });
    }

    const style = {
        width: "50em"
    }

    return (
        <div>
            <div class="mx-auto" style={style}>
                <h1>Fool! Please sign in or give us your soul.</h1>
                    <div class="form-group">
                        <label for="inputEmail">Email Address</label>
                        <input onChange={handleChange("email")} type={"email"} class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else ;)</small>
                    </div>
                    <div class="form-group">
                        <label for="inputPassword">Password</label>
                        <input onChange={handleChange("password")} type={"password"} class="form-control" id="inputPassword" placeholder="Password"/>
                    </div>
                    <button onClick={onSubmit} class="btn btn-primary">Submit</button>
                    <Link to = {"/signup"}><button class="btn btn-danger">Give Soul</button></Link>
                {/* {signedIn ? <Redirect to = {"/user"}/> : <p></p>} */}
            </div>
        </div>
    )
}

export default SignInPage;