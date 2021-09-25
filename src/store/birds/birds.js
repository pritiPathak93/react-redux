import { combineReducers } from 'redux';

const ADD_BIRD = 'ADD_BIRD';
const INCREMENT_BIRD = 'INCREMENT_BIRD';

export function addBirds(bird){
    return{
        type: ADD_BIRD,
        bird
    }
}

export function incrementBird(bird){
    return{
        type:INCREMENT_BIRD,
        bird
    }
}

const defaultBirds = [
    {
        name:'Robin',
        views:1
    }
]

function birds(state = defaultBirds, action){
    switch(action.type){
        case ADD_BIRD : 
            return[
                ...state,
                {
                    name : action.bird,
                    views:1
                }
        ];

        case INCREMENT_BIRD: 
        const bird = state.find(b => action.bird === b.name);
        const birds = state.filter(b => action.bird !== b.name );
        return [
            ...birds,
            {
                ...bird,
                views : bird.views + 1
            }
        ];

        default : 
            return state;
    }
    
}

const birdsApp = combineReducers({
    birds,
});

export default birdsApp;