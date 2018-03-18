import { 
	LOGIN_ATTEMP,
	LOGIN_SUCCESS,
	LOGIN_FAILED 
} from './types';

import firebase from '../firebase';
import { AsyncStorage } from 'react-native';

const DERAULT_AVATAR = 'https://www.google.co.kr/search?q=AVATAR&newwindow=1&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi2rpf3rPXZAhVKTrwKHeRfAAwQ_AUICigB&biw=1920&bih=983#imgrc=JBz5QANryrkVjM:';

export const login = ({ username, avatar }) => {
	const userAvatar = avatar.length === 0 ? DERAULT_AVATAR : avatar;
	return (dispatch) => {
		dispatch({ type: LOGIN_ATTEMP });
		//Auth Annones
		firebase.auth().signInAnonymously()
			.then((res) => {
				const userId = res.uid;
				const user = {
					id: userId,
					username,
					avatar: userAvatar
				};
				//Save Profile
				firebase.database().ref(`users/${userId}`)
					.set({ username, avatar: userAvatar })
					.then(() => finishLogin(dispatch, user ));
			});

		
	}
};

//로그인 정보가 db에 저장이 되면 Asyncstorage에 유저 정보 저장
const finishLogin = (dispatch, user) => {
	AsyncStorage.setItem('user_info', JSON.stringify(user))
		.then(() => {
			dispatch({ type: LOGIN_SUCCESS, payload: user });
		})
}

export const loggedIn = (user) => {
	return ({ type: LOGIN_SUCCESS, payload: user });
}