import {createContext, useContext, useEffect, useState} from 'react';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth';
import {auth, db} from '../../firebase';
import {collection, setDoc, doc} from 'firebase/firestore';

const UserContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({});

    const createUser = async (email, password) => {
        try { // Create user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('User created:', user);

            // Store user data in Firestore
            const userId = user.uid;
            const userRef = collection(db, 'users');
            await setDoc(doc(userRef, userId), { email: user.email});

            
            console.log('User data stored successfully');

            return user;
        } catch (error) {
            console.error('Error creating user and storing data: ', error);
            throw error;
        }
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
        });
        return() => {
            unsubscribe();
        };
    }, []);

    return (
        <UserContext.Provider value={
            {createUser, user, logout, signIn}
        }>
            {children}
            {' '} </UserContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(UserContext);
};