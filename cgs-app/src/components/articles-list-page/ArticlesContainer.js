import Articles from './Articles'
import { connect } from 'react-redux'

let mapStateToProps = (state) => { 
    return {
        articlesListPage: state.articlesListPage        
    }
}

const ArticlesContainer = connect(mapStateToProps)(Articles);

export default ArticlesContainer;