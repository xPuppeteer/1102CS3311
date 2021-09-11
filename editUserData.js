import firebase from 'firebase/app'
import 'firebase/database';
import 'firebase/firestore';

export default async function editUserData(dataToSet) {

    const db = firebase.firestore();
    
    const currentUser = firebase.auth().currentUser;
    const currentUID = currentUser.uid;

    const res = await db.collection('Users').doc(currentUID).set(dataToSet);

}