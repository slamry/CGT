import { createStore, combineReducers } from 'redux'
import aboutUsReducer from './aboutUsReducer';
import articleReducer from './articleReducer';
import mainPageReducer from './mainPageReducer';
import testsResultReducer from './testsResultReducer'
import testsListPageReducer from './testsListPageReducer';
import testPageReducer from './testPageReducer';
import articlesListPageReducer from './articlesListPageReducer';

let reducers = combineReducers({
    testsResult: testsResultReducer,
    aboutUsPage: aboutUsReducer,
    articlePage: articleReducer,
    mainPage: mainPageReducer,
    testsListPage: testsListPageReducer,
    testPage: testPageReducer,
    articlesListPage: articlesListPageReducer
});

let store = createStore(reducers);

export default store