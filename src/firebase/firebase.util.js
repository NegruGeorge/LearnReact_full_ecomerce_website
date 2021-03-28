import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config ={
    apiKey: "AIzaSyCNr-phG480bWjZ-9YnmDRRVvTOvkS-Wp0",
    authDomain: "crwn-db-706f2.firebaseapp.com",
    projectId: "crwn-db-706f2",
    storageBucket: "crwn-db-706f2.appspot.com",
    messagingSenderId: "646858301421",
    appId: "1:646858301421:web:d06f1a31788f4a9e6311e4",
    measurementId: "G-9GNQRZEKDG"
  };


export const createUserProfileDocument = async (userAuth, additionalData) =>
{
    if(!userAuth) return; 

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot  = await userRef.get();


    if(!snapShot.exists){
      const {displayName,email} = userAuth;
      const createdAt = new Date();
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(error)
      {
        console.log("error creating the user",error.message);
      }
    }


    return userRef;
}


firebase.initializeApp(config);   
export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;

