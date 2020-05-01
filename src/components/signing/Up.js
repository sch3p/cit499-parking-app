import React, {useRef} from "react";
import fire from "../../firebase/Fire";
import {useDispatch, useSelector} from "react-redux";
import {checkChange} from "../../actions/setActions";
// import { Redirect } from "react-router";
import { useForm } from "react-hook-form";

function SignUpPage() {

    const [value, setValues] = React.useState({
        email: "",
        password: "",
        passwordConfirm: "",
        name: ""
    });

    const dispatch = useDispatch();

    // VALIDATION
    
    const { register, errors, watch } = useForm({ mode: "onChange" });
    const password = useRef({});
    password.current = watch("password", "");

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
                        <input name={"name"} value={value.name} type="text" onChange={handleChange("name")} ref={register({required: true})} class="form-control" id="inputEmail" placeholder="Enter your full name"/>
                        <br/>{errors.name && <p>Required!</p>}
                    </div>
                    <div class="form-group">
                        <label for="inputEmail">Email Address</label>
                        <input name={"email"} value={value.email} onChange={handleChange("email")} type={"email"} ref={register({required: true})} class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else ;)</small>
                        <br/>{errors.name && <p>Required!</p>}
                    </div>
                    <div class="form-group">
                        <label for="inputPassword">Password</label>
                        <input name={"password"} value={value.password} onChange={handleChange("password")} type={"password"} ref={register({required: true})} class="form-control" id="inputPassword" placeholder="Password"/>
                        <br/>{errors.name && <p>Required!</p>}
                    </div>
                    <div class="form-group">
                        <label for="inputPasswordConfirm">Confirm Password</label>
                        <input name={"passwordConfirm"} value={value.passwordConfirm} type={"password"} class="form-control" id="inputPasswordConfirm" placeholder="Confirm Password" ref={register({
                            required: true,
                            validate: value =>
                                value === password.current || "Must be the same password"
                        })}/>
                        <br/>{errors.name && <p>Must be the same password!</p>}
                    </div>
                    <button onClick={onSubmit} class="btn btn-primary">Submit</button>
                {/* {signedIn ? <Redirect to = {"/user"}/> : <p>Please register your soul to continue..</p>} */}
            </div>
        </div>
    )
}

export default SignUpPage;