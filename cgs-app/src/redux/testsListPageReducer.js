var data = require('../database/testsList.json')

let initialState = data

const testsListPageReducer = (state = initialState, action) => {
    switch (action.type) {        
        default:
            return state;
    }
}

export default testsListPageReducer;