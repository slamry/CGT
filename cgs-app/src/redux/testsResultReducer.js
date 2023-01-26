const CHANGE_POSITIVE_ANSWER_COUNT = 'CHANGE-POSITIVE-ANSWER-COUNT'
const CHANGE_NEGATIVE_ANSWER_COUNT = 'CHANGE-NEGATIVE-ANSWER-COUNT'

var data = require('../database/testsResult.json')

let initialState = data

const testsResultReducer = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_POSITIVE_ANSWER_COUNT: {
            let stateCopy = { ...state }
            var tempAnswerCount = stateCopy[action.id].answerCount
            tempAnswerCount++
            stateCopy[action.id].answerCount = tempAnswerCount
            console.log(stateCopy[action.id].answerCount)
            return stateCopy;
        }
        case CHANGE_NEGATIVE_ANSWER_COUNT: {
            let stateCopy = { ...state }
            console.log(stateCopy[action.id].answerCount)
            return stateCopy;
        }
        default: {
            let stateCopy = { ...state }
            return stateCopy;
        }
    }
}

//actionCreators нужны для ui, чтобы с типом действия и т.д. не возиться
export let changePositiveAnswerCountActionCreator = (id) =>
    ({ type: CHANGE_POSITIVE_ANSWER_COUNT, id: id });
export let changeNegativeAnswerCountActionCreator = (id) =>
    ({ type: CHANGE_NEGATIVE_ANSWER_COUNT, id: id });
export default testsResultReducer;