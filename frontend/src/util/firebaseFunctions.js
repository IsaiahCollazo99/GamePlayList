import firebase from '../firebase';
import { storage } from 'firebase';

firebase.auth().useDeviceLanguage();

export const logout = () => firebase.auth().signOut();

export const firebaseLogIn = (email, password) => {
	return firebase.auth().signInWithEmailAndPassword(email, password);
}

export const firebaseSignUp = async ( email, password, displayName ) => {
    const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
    await user.updateProfile({
        displayName
    })
    return user;
}

export const getFirebaseIdToken = () => {
	return firebase.auth().currentUser.getIdToken(false);
}

const handleSnapshot = ( snapshot ) => {

}

const handleError = ( error ) => {
    console.log(error);
    throw error;
}

export const uploadPicture = async ( folderPath, data, callback ) => {
    try {
        const now = new Date().toString();
        let storageRef = storage().ref(folderPath + now);
        let upload = storageRef.put(data.file);
    
        upload.on('state_changed', handleSnapshot, handleError , async () => {
            const image = await upload.snapshot.ref.getDownloadURL();
            await callback({id: data.id, url: image});
        })
    } catch (error) {
        throw error;
    }
}