var data = require('../database/main.json')

let initialState = data

const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {        
        default:
            return state;
    }
}

export default mainPageReducer;