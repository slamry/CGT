import styles from './Test.module.css';
import React, { useCallback, useState } from 'react';
import { useNavigate } from "react-router-dom";
import ProgressBar from './ProgressBar/ProgressBar'

//ОСНОВНОЙ ДВИЖ ВНЕ CONTENTAREA
const TestContentArea = (props) => {
    let onClickPosFunctions = () => {
        props.changePositiveAnswerCount()
        props.showNextQuestion()
        if (props.progressValue.progress < 96) {
            props.setProgress()
        }
        props.changeRouteToResult()
    }
    let onClickNegFunctions = () => {
        props.changeNegativeAnswerCount()
        props.showNextQuestion()
        if (props.progressValue.progress < 96) {
            props.setProgress()
        }
        props.changeRouteToResult()
    }

    return (
        <div className={styles.contentArea}>
            <div className={styles.title}>
                {props.question}
                
            </div>
            <div className={styles.buttons}>
                <button className={styles.answer} onClick={onClickPosFunctions} >
                    {props.positiveAnswer}
                </button>
                <button className={styles.answer} onClick={onClickNegFunctions}>
                    {props.negativeAnswer}
                </button>
            </div>
        </div>
    )
}

const Test = (props) => {

    let navigate = useNavigate();

    const changeRouteToResult = () => {
        switch (window.location.pathname) {
            case '/test1': {
                if (props.localState.test1[0].questionsCounter === 5) {
                    let path = '/testresult1';
                    navigate(path);
                }
                break;
            }
            case '/test2': {
                if (props.localState.test2[0].questionsCounter === 5) {
                    let path = '/testresult2';
                    navigate(path);
                }
                break;
            }
            case '/test3': {
                if (props.localState.test3[0].questionsCounter === 5) {
                    let path = '/testresult3';
                    navigate(path);
                }
                break;
            }
            case '/test4': {
                if (props.localState.test4[0].questionsCounter === 5) {
                    let path = '/testresult4';
                    navigate(path);
                }
                break;
            }
            default: {
                console.log('smth went wrong')
                break;
            }
        }
    }

    const [progressValue, setProgressValue] = useState({ progress: 0 });
    const setProgress = useCallback(() => {
        setProgressValue(({ progress }) => ({
            progress: progress + (100/5),
        }));
    }, []);

    

    if (window.location.pathname === '/test1') {
        let testId = 0
        let questId = props.localState.test1[0].questionsCounter
        let state = props.testPage.test1[questId]

        let increaseQuestionCounter = () => {
            if (props.localState.test1[0].questionsCounter < props.localState.test1[0].questionsCount) {
                props.localState.test1[0].questionsCounter++
            }
        }

        // чтобы страница не падала
        if (props.localState.test1[0].questionsCounter ===
            props.localState.test1[0].questionsCount) {
            props.localState.test1[0].questionsCounter = 0
        }

        return (
            <div className='wrapper'>
                <div className={styles.content}>
                    <ProgressBar progress={progressValue.progress} />
                    <TestContentArea
                        changePositiveAnswerCount={() => props.changePositiveAnswerCount(testId)}
                        changeNegativeAnswerCount={() => props.changeNegativeAnswerCount(testId)}
                        setProgress={setProgress}
                        progressValue={progressValue}
                        showNextQuestion={increaseQuestionCounter}
                        question={state.question}
                        positiveAnswer={state.positiveAnswer}
                        negativeAnswer={state.negativeAnswer}
                        changeRouteToResult={changeRouteToResult} />
                </div>
            </div>
        )
    }
    else if (window.location.pathname === '/test2') {
        let testId = 1
        let questId = props.localState.test2[0].questionsCounter
        let state = props.testPage.test2[questId]

        let increaseQuestionCounter = () => {
            if (props.localState.test2[0].questionsCounter < props.localState.test2[0].questionsCount) {
                props.localState.test2[0].questionsCounter++
            }
        }

        if (props.localState.test2[0].questionsCounter ===
            props.localState.test2[0].questionsCount) {
            props.localState.test2[0].questionsCounter = 0
        }

        return (
            <div className='wrapper'>
                <div className={styles.content}>
                    <ProgressBar progress={progressValue.progress} />
                    <TestContentArea
                        changePositiveAnswerCount={() => props.changePositiveAnswerCount(testId)}
                        changeNegativeAnswerCount={() => props.changeNegativeAnswerCount(testId)}
                        setProgress={setProgress}
                        progressValue={progressValue}
                        showNextQuestion={increaseQuestionCounter}
                        question={state.question}
                        positiveAnswer={state.positiveAnswer}
                        negativeAnswer={state.negativeAnswer}
                        changeRouteToResult={changeRouteToResult} />
                </div>
            </div>
        )
    }
    else if (window.location.pathname === '/test3') {
        let testId = 2
        let questId = props.localState.test3[0].questionsCounter
        let state = props.testPage.test3[questId]

        let increaseQuestionCounter = () => {
            if (props.localState.test3[0].questionsCounter < props.localState.test3[0].questionsCount) {
                props.localState.test3[0].questionsCounter++
            }
        }

        if (props.localState.test3[0].questionsCounter ===
            props.localState.test3[0].questionsCount) {
            props.localState.test3[0].questionsCounter = 0
        }

        return (
            <div className='wrapper'>
                <div className={styles.content}>
                    <ProgressBar progress={progressValue.progress} />
                    <TestContentArea
                        changePositiveAnswerCount={() => props.changePositiveAnswerCount(testId)}
                        changeNegativeAnswerCount={() => props.changeNegativeAnswerCount(testId)}
                        setProgress={setProgress}
                        progressValue={progressValue}
                        showNextQuestion={increaseQuestionCounter}
                        question={state.question}
                        positiveAnswer={state.positiveAnswer}
                        negativeAnswer={state.negativeAnswer}
                        changeRouteToResult={changeRouteToResult} />
                </div>
            </div>
        )
    }
    else if (window.location.pathname === '/test4') {
        let testId = 3
        let questId = props.localState.test4[0].questionsCounter
        let state = props.testPage.test4[questId]

        let increaseQuestionCounter = () => {
            if (props.localState.test4[0].questionsCounter < props.localState.test4[0].questionsCount) {
                props.localState.test4[0].questionsCounter++
            }
        }

        if (props.localState.test4[0].questionsCounter ===
            props.localState.test4[0].questionsCount) {
            props.localState.test4[0].questionsCounter = 0
        }

        return (
            <div className='wrapper'>
                <div className={styles.content}>
                    <ProgressBar progress={progressValue.progress} />
                    <TestContentArea
                        changePositiveAnswerCount={() => props.changePositiveAnswerCount(testId)}
                        changeNegativeAnswerCount={() => props.changeNegativeAnswerCount(testId)}
                        setProgress={setProgress}
                        progressValue={progressValue}
                        showNextQuestion={increaseQuestionCounter}
                        question={state.question}
                        positiveAnswer={state.positiveAnswer}
                        negativeAnswer={state.negativeAnswer}
                        changeRouteToResult={changeRouteToResult} />
                </div>
            </div>
        )
    }
}

export default Test;