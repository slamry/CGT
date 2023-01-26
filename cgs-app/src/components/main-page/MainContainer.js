import Main from './Main'
import { connect } from 'react-redux'
// import { changeAnswerCountActionCreator } from '../../redux/testReducer'

let mapStateToProps = (state) => {    
    return {
        mainPage: state.mainPage        
    }
}

const MainContainer = connect(mapStateToProps)(Main);

export default MainContainer;