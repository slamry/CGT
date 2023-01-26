var data = require('../database/article.json')


let initialState = data

const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default articleReducer;