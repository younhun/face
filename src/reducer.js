//Import




//Actions
const START_TIMER = 'START_TIMER';
const RESTART_TIMER = 'RESTART_TIMER';
const ADD_SECOND = 'ADD_SECOND';

//Action Creators
function startTimer() {
	return {
		type: START_TIMER
	};
}

function restartTimer() {
	return {
		type: RESTART_TIMER
	};
}

function addSecond() {
	return {
		type: ADD_SECOND
	};
}

//Reducer
const TIME_DURATION =  1500;
const initialState = {
	isPlaying: false,
	elapsedTime: 0,
	timerDuration: TIME_DURATION
};

function reducer(state = initialState, action){
	switch(action.type){		 //switch는 action.type 기반이다.
		case START_TIMER:
			return applyStartTimer(state);
		case RESTART_TIMER:
			return applyRestartTimer(state);
		case ADD_SECOND:
			return applyAddSecond(state);
		default:
			return state;
	}

}


//Reducer Functions
function applyStartTimer(state) {
	return {
		...state,				//현재 가지고 있는 state에서
		isPlaying: true 		//이 부분만 overwrite 한다.
								//...state 없으면 isPlaying만 남게 된다. (다른건 없어지고)

	};
}

function applyRestartTimer(state) {
	return {
		...state,
		isPlaying: false,
		elapsedTime: 0

	};
}

function applyAddSecond(state) {
	
	if(state.elapsedTime < TIME_DURATION) {
		return {
			...state,
			elapsedTime: state.elapsedTime + 1
		};
	}else {
		return {
			...state,
			isPlaying: false
		};
	}

}

//Export Action Creators 
const actionCreators = {
	startTimer,
	restartTimer,
	addSecond
}

//Export Reducer
export default reducer;


