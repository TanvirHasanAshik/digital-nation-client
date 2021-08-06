import React, { useContext, useState } from 'react';
import NaveBar from '../../Shared/NaveBar/NaveBar';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../FirebaseConfig/FirebaseConfig';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({
        name: '', email: '', image: '', success: false, error: ''
    });

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                const newUser = { ...user };
                newUser.email = email;
                newUser.image = photoURL;
                newUser.name = displayName;
                newUser.success = true;
                newUser.error = "";
                setUser(newUser);
                setLoggedInUser(newUser);
                userVerifyToken();
                history.replace(from);
            })
            .catch((error) => {
                const newUser = { ...user };
                newUser.success = false;
                newUser.error = error.message;
                setUser(newUser);
                setLoggedInUser(newUser);
            });
    }
    const userVerifyToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then( idToken =>{
            sessionStorage.setItem('token', JSON.stringify(idToken));
        }).catch(error => {
            console.log(error.message);
        });

    }
    return (
        <div>
            <NaveBar></NaveBar>
            <div className="login-container container-fluid">
                <div className="row d-flex justify-content-center">
                    <div className="login-form col-md-5 pt-3 mt-5">
                        <h2>Sign in your account</h2><hr />
                        <div className="mt-5">
                            <button onClick={handleGoogleLogin} className="btn googleLoginBtn"> Sign In with Google</button> [** It will work **]
                        </div>
                        <div className="mt-5">
                            <button className="btn googleLoginBtn"> Sign In with Facebook</button>
                        </div>
                        <div className="mt-5">
                            <button className="btn googleLoginBtn"> Sign In with Git Hub</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;










// {!oldUser ? <form>
//     <h2>Sign up your account</h2><hr />
//     <div className="form-group pb-3">
//         <label for="exampleInputEmail1">User Name</label>
//         <input name="userName" onBlur={handleBlur} type="text" class="form-control" placeholder="Enter User Name" />
//     </div>
//     <div className="form-group pb-3">
//         <label for="exampleInputEmail1">Email</label>
//         <input name="email" onBlur={handleBlur} type="email" class="form-control" placeholder="Enter User Email" />
//     </div>
//     <div className="form-group pb-3">
//         <label for="exampleInputEmail1">Password</label>
//         <input name="password" onBlur={handleBlur} type="password" class="form-control" placeholder="Enter User Password" />
//     </div>
//     <div class="form-check ">
//         <input name=" " onClick={() => setOldUser(!oldUser)} type="checkbox" id="exampleCheck" class="form-check-input" />
//         <label class="form-check-label" for="exampleCheck">Already have an account.</label>
//     </div>
//     <button type="submit" class="btn btn-primary">Sign Up</button>
// </form>
//     :
//     <form>
//         <h2>Sign in your account</h2><hr />
//         <div className="form-group pb-3">
//             <label for="exampleInputEmail1">Email</label>
//             <input name="email" onBlur={handleBlur} type="email" class="form-control" placeholder="Enter User Email" />
//         </div>
//         <div className="form-group pb-3">
//             <label for="exampleInputEmail1">Password</label>
//             <input name="password" onBlur={handleBlur} type="password" class="form-control" placeholder="Enter User Password" />
//         </div>
//         <button type="submit" class="btn btn-primary">Sign In</button>
//     </form>
// }
// <p className="text-center pt-3 mt-3"><b>--- OR ---</b></p>