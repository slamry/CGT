import Test from './Test'
import { connect } from 'react-redux'
import { changePositiveAnswerCountActionCreator } from '../../redux/testsResultReducer'
import { changeNegativeAnswerCountActionCreator } from '../../redux/testsResultReducer'
import { showNextQuestionActionCreator } from '../../redux/testPageReducer'

//НЕ ПИХАТЬ В JSON!!! ЭТО ВРЕМЕННЫЙ КОСТЫЛЬНЫЙ STATE
let localState = {
    test1: [
        {
            questionsCounter: 0,
            questionsCount: 5
        }
    ],
    test2: [
        {
            questionsCounter: 0,
            questionsCount: 5
        }
    ],
    test3: [
        {
            questionsCounter: 0,
            questionsCount: 5
        }
    ],
    test4: [
        {
            questionsCounter: 0,
            questionsCount: 5
        }
    ]
}

let mapStateToProps = (state) => {
    return {
        testPage: state.testPage,
        localState: localState
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        changePositiveAnswerCount: (id) => {
            if (localState.test1[0].questionsCounter < localState.test1[0].questionsCount - 1) {
                let action = changePositiveAnswerCountActionCreator(id);
                dispatch(action)
                console.log(`${localState.test1[0].questionsCounter} / ${localState.test1[0].questionsCount}`)
            }
        },
        changeNegativeAnswerCount: (id) => {
            if (localState.test1[0].questionsCounter < localState.test1[0].questionsCount - 1) {
                let action = changeNegativeAnswerCountActionCreator(id);
                dispatch(action)
                console.log(`${localState.test1[0].questionsCounter} / ${localState.test1[0].questionsCount}`)
            }
        },
        showNextQuestion: () => {
            let action = showNextQuestionActionCreator()
            dispatch(action)
        }
    }
}

const TestsContainer = connect(mapStateToProps, mapDispatchToProps)(Test);

export default TestsContainer;