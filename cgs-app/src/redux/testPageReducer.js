const SHOW_NEXT_QUESTION = 'SHOW-NEXT-QUESTION'

var data = require('../database/test.json')

let initialState = data

const testPageReducer = (state = initialState, action) => {

    switch (action.type) {
        //этот ваш интернет нам нахой не нужон
        case SHOW_NEXT_QUESTION: {
            let stateCopy = { ...state }            
            return stateCopy;
        }

        default: {
            let stateCopy = { ...state }
            return stateCopy;
        }
    }
}

//actionCreators нужны для ui, чтобы с типом действия и т.д. не возиться
export let showNextQuestionActionCreator = () => ({
    type: SHOW_NEXT_QUESTION
});
export default testPageReducer;

