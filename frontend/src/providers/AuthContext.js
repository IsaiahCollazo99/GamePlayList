import React, { createContext, useState, useEffect } from "react";
import firebase from "../firebase";
import { getUserById } from "../util/apiCalls/getRequests";

import { getFirebaseIdToken } from "../util/firebaseFunctions";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [token, setToken] = useState(null);
	const [loading, setLoading] = useState(true);

	const getUserCall = async ( backOffTime = 1 ) => {
		try {
			if(currentUser) {
				if(!currentUser.first_name) {
					const data = await getUserById(currentUser.id);
					setCurrentUser({...currentUser, ...data});
				}
			}
		} catch ( error ) {
			setTimeout(async () => {
				await getUserCall(backOffTime * 2);
			}, backOffTime * 1000);
		}
	}

	useEffect(() => {
		getUserCall();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentUser])

	const updateUser = async (user) => {
		if (user) {
			// Add a time checker. Throw an error if it's taking too long
			const { uid: id, email, displayName: username } = user;
			setCurrentUser({ id, email, username });
			const token = await getFirebaseIdToken();
			setToken(token);
			setLoading(false);
		} else {
			setCurrentUser(null);
			setLoading(false);
		}
	};

	useEffect(() => {
		const unsubscribe = firebase.auth().onAuthStateChanged(updateUser);
		return unsubscribe;
	}, []);

	if (loading)
		return (
			<div className="loading">
				<div className="loadingText">Loading...</div>
			</div>
		);
	return (
		<AuthContext.Provider value={{ currentUser, token }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;