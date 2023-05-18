import { firebase } from '../../Config/Firebase'

const create_user = (nameref, emailref, passwordref, downloadUrl, History) => {
    // console.log(downloadUrl)
    const imgurl = downloadUrl
    console.log(imgurl)
    const name = nameref.current.value
    const email = emailref.current.value
    const password = passwordref.current.value
    console.log(name, email)
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var user = userCredential.user;
            console.log(user)
            user.updateProfile({
                displayName: name,
                photoURL: imgurl[0]
            })
            History.push('/Login')
            // Signed in 
            // ...
        })
        .catch((error) => {
            // var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
            // ..
        });
}
const login_user = (emailref, passwordref, History) => {
    return (dispatch) => {
        const email = emailref.current.value
        const password = passwordref.current.value
        console.log(email)
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log(user)
                dispatch({
                    type: 'SETUSER',
                    payload: user
                })
                History.push('/')
                // ...
            })
            .catch((error) => {
                // var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage)
            });

    }

}
const signout = (History) => {
    return (dispatch) => {
        firebase.auth().signOut().then(() => {
            dispatch({
                type: 'REMOVEUSER'
            })
            console.log('logout')
            // Sign-out successful.
            History.push('/')
        })
            .catch((error) => {
                var errorMessage = error.message;
                alert(errorMessage)
                // An error happened.
            });
    }
}

export {
    create_user,
    login_user,
    signout
}
