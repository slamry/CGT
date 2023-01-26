var data = require('../database/aboutUs.json')

let initialState = data

const aboutUsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default aboutUsReducer;