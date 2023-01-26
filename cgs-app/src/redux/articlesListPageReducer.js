var data = require('../database/articlesList.json')

let initialState = data

const articlesListPageReducer = (state = initialState, action) => {
    switch (action.type) {        
        default:
            return state;
    }
}

export default articlesListPageReducer;