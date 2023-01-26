import styles from './TestResult.module.css';
import { NavLink, useNavigate } from 'react-router-dom';

const TestResultArea = (props) => {
    const TITLE = 'Тест успешно завершен'
    const CONGRATS = 'А теперь... к результатам!'
    const LIST_TITLE = 'Рекомендуемые материалы:'
    const BACK_TO_TESTS = 'Обратно к тестам'

    var resultText = props.resultText

    let navigate = useNavigate();
    const changeRouteToTests = () => {
        let path = '/tests';
        navigate(path);
    }

    return (
        <div className="wrapper">
            <div className={styles.content}>
                <div className={styles.rect}>
                    <div className={styles.grid_container}>
                        <div className={styles.img}>
                            <img src={require(`${props.state[props.id].img}`)} alt="" />
                        </div>
                        <div className={styles.text_content}>
                            <div className={styles.title}>
                                {TITLE}
                            </div>
                            <div className={styles.congrats}>
                                {CONGRATS}
                            </div>
                            <div className={styles.main_part}>
                                {resultText}
                            </div>
                            <div className={styles.recommends}>
                                <div className={styles.list_title}>
                                    {LIST_TITLE}
                                </div>
                                <ul className={styles.articles}>
                                    <NavLink to={props.articleLink}>
                                        <li className={styles.art_title}>
                                            {props.articleTitle}
                                        </li>
                                    </NavLink>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.button_field}>
                    <button className={styles.back_to_tests} onClick={changeRouteToTests}>
                        {BACK_TO_TESTS}
                    </button>
                </div>
            </div>
        </div>
    )
}

const TestResult = (props) => {
    // не могу навести такую же красоту как в article, потому как здесь длина массива прихдоит
    //как андеф, поэтому будет некрасиво и пошло
    let state = props.testsResult

    const LOW_PROPENSITY = 'LOW-PROPENSITY'
    const AVERAGE_PROPENSITY = 'AVERAGE-PROPENSITY'
    const HIGH_PROPENSITY = 'HIGH-PROPENSITY'

    let analyzeResult = (id) => {
        if (state[id].answerCount >= 0 && state[id].answerCount <= 1) {
            return LOW_PROPENSITY
        }
        else if (state[id].answerCount >= 2 && state[id].answerCount <= 3) {
            return AVERAGE_PROPENSITY
        }
        else if (state[id].answerCount === 4) {
            return HIGH_PROPENSITY
        }
        else {
            console.log('smth going wrong')
            return AVERAGE_PROPENSITY
        }
    }

    let resetAnswerCount = (max) => {
        return Math.floor(Math.random() * max);
    }

    if (window.location.pathname === '/testresult1') {
        var id = 0
        if (state[id].answerCount > state[id].maxResult) {
            state[id].answerCount = resetAnswerCount(state[id].maxResult + 1)
        }

        var resultValue = analyzeResult(id)

        switch (resultValue) {
            case LOW_PROPENSITY: {
                return (
                    <TestResultArea
                        state={state}
                        id={id}
                        articleLink={state[id].lowArticleLink}
                        articleTitle={state[id].lowArticleTitle}
                        resultText={state[id].lowResult}
                    />
                )
            }
            case AVERAGE_PROPENSITY: {
                return (
                    <TestResultArea
                        state={state}
                        id={id}
                        articleLink={state[id].avgArticleLink}
                        articleTitle={state[id].avgArticleTitle}
                        resultText={state[id].avgResult}
                    />
                )
            }
            case HIGH_PROPENSITY: {
                return (
                    <TestResultArea
                        state={state}
                        id={id}
                        articleLink={state[id].highArticleLink}
                        articleTitle={state[id].highArticleTitle}
                        resultText={state[id].highResult}
                    />
                )
            }
            default: {
                return (
                    <></>
                )
            }
        }
    }
    else if (window.location.pathname === '/testresult2') {
        id = 1
        if (state[id].answerCount > state[id].maxResult) {
            state[id].answerCount = resetAnswerCount(state[id].maxResult + 1)
        }
        resultValue = analyzeResult(id)

        switch (resultValue) {
            case LOW_PROPENSITY: {
                return (
                    <TestResultArea
                        state={state}
                        id={id}
                        articleLink={state[id].lowArticleLink}
                        articleTitle={state[id].lowArticleTitle}
                        resultText={state[id].lowResult}
                    />
                )
            }
            case AVERAGE_PROPENSITY: {
                return (
                    <TestResultArea
                        state={state}
                        id={id}
                        articleLink={state[id].avgArticleLink}
                        articleTitle={state[id].avgArticleTitle}
                        resultText={state[id].avgResult}
                    />
                )
            }
            case HIGH_PROPENSITY: {
                return (
                    <TestResultArea
                        state={state}
                        id={id}
                        articleLink={state[id].highArticleLink}
                        articleTitle={state[id].highArticleTitle}
                        resultText={state[id].highResult}
                    />
                )
            }
            default: {
                return (
                    <></>
                )
            }
        }
    }
    else if (window.location.pathname === '/testresult3') {
        id = 2
        if (state[id].answerCount > state[id].maxResult) {
            state[id].answerCount = resetAnswerCount(state[id].maxResult + 1)
        }
        resultValue = analyzeResult(id)

        switch (resultValue) {
            case LOW_PROPENSITY: {
                return (
                    <TestResultArea
                        state={state}
                        id={id}
                        articleLink={state[id].lowArticleLink}
                        articleTitle={state[id].lowArticleTitle}
                        resultText={state[id].lowResult}
                    />
                )
            }
            case AVERAGE_PROPENSITY: {
                return (
                    <TestResultArea
                        state={state}
                        id={id}
                        articleLink={state[id].avgArticleLink}
                        articleTitle={state[id].avgArticleTitle}
                        resultText={state[id].avgResult}
                    />
                )
            }
            case HIGH_PROPENSITY: {
                return (
                    <TestResultArea
                        state={state}
                        id={id}
                        articleLink={state[id].highArticleLink}
                        articleTitle={state[id].highArticleTitle}
                        resultText={state[id].highResult}
                    />
                )
            }
            default: {
                return (
                    <></>
                )
            }
        }
    }
    else if (window.location.pathname === '/testresult4') {
        id = 3
        if (state[id].answerCount > state[id].maxResult) {
            state[id].answerCount = resetAnswerCount(state[id].maxResult + 1)
        }
        resultValue = analyzeResult(id)

        switch (resultValue) {
            case LOW_PROPENSITY: {
                return (
                    <TestResultArea
                        state={state}
                        id={id}
                        articleLink={state[id].lowArticleLink}
                        articleTitle={state[id].lowArticleTitle}
                        resultText={state[id].lowResult}
                    />
                )
            }
            case AVERAGE_PROPENSITY: {
                return (
                    <TestResultArea
                        state={state}
                        id={id}
                        articleLink={state[id].avgArticleLink}
                        articleTitle={state[id].avgArticleTitle}
                        resultText={state[id].avgResult}
                    />
                )
            }
            case HIGH_PROPENSITY: {
                return (
                    <TestResultArea
                        state={state}
                        id={id}
                        articleLink={state[id].highArticleLink}
                        articleTitle={state[id].highArticleTitle}
                        resultText={state[id].highResult}
                    />
                )
            }
            default: {
                return (
                    <></>
                )
            }
        }
    }
}

export default TestResult;