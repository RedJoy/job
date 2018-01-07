import axios from 'axios';

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const USER_DATA = 'USER_DATA';

const initState = {
	isAuth: false,
	user: 'RedJoy',
	age: 18
}
export function auth(state=initState,action){
	console.log(action)
	switch(action.type){
		case LOGIN:
			return {...state,isAuth:true}
		case LOGOUT:
			return {...state,isAuth:false}
		case USER_DATA:
			// return {...state,...action.payload,isAuth:true}
			return {...state,user:action.payload.user,age:action.payload.age}
		default: 
			return state
	}
}

//action
export function getUserData(){
	// dispatch 用来通知数据修改
	return dispatch => {
		axios.get('/data')
			.then(res =>{
				if(res.status == 200) {
					dispatch(userDate(res.data));
				}
			})
	}
}
export function userDate(data) {
	return {type:USER_DATA,payload:data}
}
export function login(){
	return {type:LOGIN}
}
export function logout(){
	return {type:LOGOUT}
}