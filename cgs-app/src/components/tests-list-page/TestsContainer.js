import Tests from './Tests'
import { connect } from 'react-redux'

let mapStateToProps = (state) => { 
    return {
        testsListPage: state.testsListPage        
    }
}

const TestsContainer = connect(mapStateToProps)(Tests);

export default TestsContainer;