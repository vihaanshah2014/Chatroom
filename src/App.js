import Button from './components/Button';


import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { useEffect, useState } from 'react';

firebase.initializeApp({
    apiKey: "AIzaSyCj2lKOFr_PvXkVXipY6xElwjSQihxD2Jg",
    authDomain: "react-firechat-4ccab.firebaseapp.com",
    projectId: "react-firechat-4ccab",
    storageBucket: "react-firechat-4ccab.appspot.com",
    messagingSenderId: "296782523190",
    appId: "1:296782523190:web:8f0e731b7ff13375a36197",
})

function App() {

    const [user, setUser] = useState(() => auth.currentUser);
    const [initializing, setInitializing] = useState(true);


    useEffect(() => {
      if(user) {
        setUser(user);
      } else {
        setUser(null);
      }
      if (initializing){
        setInitializing(false);
      }

      //Clean
      return unsubscribe;
    }, [])


    //signing in
    const signInWithGoogle = async () => {
      //Retrieve Google provider object
      const provider = new firebase.auth.GoogleAuthProvider();
      //Set language to default in browser
      auth.useDeviceLanguage();

      try{
        await auth.signInWithPopup(provider);
      } catch(error){
        console.log(error);
      }
      
    };

    //signing out
    const signOut = async () => {
      try {
        await firebase.auth().signOut();
      } catch(error){
        console.log(error.message);
      }

    };

    if (initializing) return "Loading ...";
  return (
    <div className="App">
      {user ? (
        <>
        <Button onClick={signOut}>Sign Out</Button>
        <p>Welcome to the chat</p>
        </>
        
      
    ) : (
    <Button onClick={signInWithGoogle}>Sign in with Google</Button>
    )}
    </div>
  );
}

export default App;
