import TestResult from './TestResult';
import { connect } from 'react-redux'

let mapStateToProps = (state) => {    
    return {
        testsResult: state.testsResult        
    }
}

const TestResultContainer = connect(mapStateToProps)(TestResult);

export default TestResultContainer;