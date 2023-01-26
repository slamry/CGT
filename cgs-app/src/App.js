import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import MainContainer from './components/main-page/MainContainer';
import ArticlesContainer from './components/articles-list-page/ArticlesContainer';
import ArticleContainer from './components/article-page/ArticleContainer';
import TestsContainer from './components/tests-list-page/TestsContainer';
import AboutUsContainer from './components/about-us-page/AboutUsContainer';
import TestContainer from './components/test-page/TestContainer';
import TestResultContainer from './components/test-result-page/TestResultContainer';

const App = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <main>
        <Routes>
          <Route path='/' element={<MainContainer />} />

          <Route path='/articles' element={<ArticlesContainer />} />

          <Route path='/article1' element={<ArticleContainer />} />
          <Route path='/article2' element={<ArticleContainer />} />
          <Route path='/article3' element={<ArticleContainer />} />
          <Route path='/article4' element={<ArticleContainer />} />
          <Route path='/article5' element={<ArticleContainer />} />
          <Route path='/article6' element={<ArticleContainer />} />
          <Route path='/article7' element={<ArticleContainer />} />
          <Route path='/article8' element={<ArticleContainer />} />
          <Route path='/article9' element={<ArticleContainer />} />
          <Route path='/article10' element={<ArticleContainer />} />
          <Route path='/article11' element={<ArticleContainer />} />
          <Route path='/article12' element={<ArticleContainer />} />

          <Route path='/tests' element={<TestsContainer />} />
          
          <Route path='/test1' element={<TestContainer />} />
          <Route path='/test2' element={<TestContainer />} />
          <Route path='/test3' element={<TestContainer />} />
          <Route path='/test4' element={<TestContainer />} />

          <Route path='/testresult1' element={<TestResultContainer />} />
          <Route path='/testresult2' element={<TestResultContainer />} />
          <Route path='/testresult3' element={<TestResultContainer />} />
          <Route path='/testresult4' element={<TestResultContainer />} />

          <Route path='/aboutus' element={<AboutUsContainer />} />
        </Routes>
      </main>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;