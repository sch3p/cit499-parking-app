import React, {useRef} from "react";
import fire from "../../firebase/Fire";
import {useDispatch, useSelector} from "react-redux";
import {checkChange} from "../../actions/setActions";
// import { Redirect } from "react-router";
// import { useForm } from "react-hook-form";

function SignUpPage() {

    const [value, setValues] = React.useState({
        email: "",
        password: "",
        name: ""
    });

    const dispatch = useDispatch();

    const handleChange = prop => event => {
        setValues({
            ...value,
            [prop]: event.target.value
        });
    }

    // const signedIn = useSelector(state => state.signedIn);

    const onSubmit = (data, e) => {
        fire.auth().createUserWithEmailAndPassword(value.email, value.password).then( () => {

            let user = fire.auth().currentUser;

            user.updateProfile({
                displayName: value.name
            }).then( () => {
                setValues({
                    email: "",
                    password:"",
                    passwordConfirm:"",
                    name:""
                });

                dispatch(checkChange());

            }).catch( (error) => {
                // An error happened.
                console.log(error);
            });

        }).catch( (error) => {
            // Handle Errors here.
            // let errorCode = error.code;
            let errorMessage = error.message;
            alert(errorMessage);
        });

    };

    const style = {
        width: "50em"
    }

    return (
        <div>
            <div class="mx-auto" style={style}>
                <h1>I see, a smart one. Register your soul here!</h1>
                    <div class="form-group">
                        <label for="inputName">Full Name</label>
                        <input type="text" onChange={handleChange("name")} class="form-control" id="inputEmail" placeholder="Enter your full name" required/>
                        <br/>
                    </div>
                    <div class="form-group">
                        <label for="inputEmail">Email Address</label>
                        <input onChange={handleChange("email")} type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" required/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else ;)</small>
                        <br/>
                    </div>
                    <div class="form-group">
                        <label for="inputPassword">Password</label>
                        <input onChange={handleChange("password")} type="password" class="form-control" id="inputPassword" placeholder="Password" required/>
                    </div>
                    <button onClick={onSubmit} class="btn btn-primary">Give }:)</button>
                {/* {signedIn ? <Redirect to = {"/user"}/> : <p>Please register your soul to continue..</p>} */}
            </div>
        </div>
    )
}

export default SignUpPage;