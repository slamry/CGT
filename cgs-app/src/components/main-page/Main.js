import styles from './Main.module.css';
import { useNavigate } from "react-router-dom";

let Main = (props) => {
    let state = props.mainPage

    let navigate = useNavigate();
    const changeRouteToTests = () => {
        let path = '/tests';
        navigate(path);
    }
    const changeRouteToArticles = () => {
        let path = '/articles';
        navigate(path);
    }
    const changeRouteToAboutUs = () => {
        let path = '/aboutus';
        navigate(path);
    }

    return (
        <div className='wrapper'>

            {/*СЕКЦИЯ 1 ---- ОБЩЕЕ*/}
            <section id={styles.main1}>
                <div className={styles.rect}>
                    <div className={styles.content}>
                        <div className={styles.desktop}>
                            <img src={require(`${state[0].img}`)} alt="" />
                            <div>
                                <p className={styles.title}>
                                    {state[0].title}
                                </p>
                                <p className={styles.desc}>
                                    {state[0].content}
                                </p>
                            </div>
                        </div>

                        <div className={styles.tablet}>
                            <p className={styles.title}>
                                {state[0].title}
                            </p>
                            <div>
                                <img src={require(`${state[0].img}`)} alt="" />
                                <p className={styles.desc}>
                                    {state[0].content}
                                </p>
                            </div>
                        </div>

                        <div className={styles.phone}>
                            <p className={styles.title}>
                                {state[0].title}
                            </p>
                            <img src={require(`${state[0].img_hor}`)} alt="" />
                            <p className={styles.desc}>
                                {state[0].content}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/*СЕКЦИЯ 2 ---- ПРО ТЕСТЫ*/}
            <section id={styles.main2}>
                <div className={styles.rect}>
                    <div className={styles.content}>
                        <div className={styles.desktop}>
                            <img src={require(`${state[1].img}`)} alt="" />
                            <div>
                                <p className={styles.title}>
                                    {state[1].title}
                                </p>
                                <p className={styles.desc}>
                                    {state[1].content}
                                </p>
                                <button className={styles.button} onClick={changeRouteToTests}>
                                    К тестам
                                </button>
                            </div>
                        </div>

                        <div className={styles.tablet}>
                            <p className={styles.title}>
                                {state[1].title}
                            </p>
                            <div>
                                <img src={require(`${state[1].img}`)} alt="" />
                                <p className={styles.desc}>
                                    {state[1].content}
                                </p>
                            </div>
                            <button className={styles.button} onClick={changeRouteToTests}>
                                К тестам
                            </button>
                        </div>

                        <div className={styles.phone}>
                            <p className={styles.title}>
                                {state[1].title}
                            </p>
                            <img src={require(`${state[1].img_hor}`)} alt="" />
                            <p className={styles.desc}>
                                {state[1].content}
                            </p>
                            <button className={styles.button} onClick={changeRouteToTests}>
                                К тестам
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/*СЕКЦИЯ 3 ---- ПРО СТАТЬИ*/}
            <section id={styles.main3}>
                <div className={styles.rect}>
                    <div className={styles.content}>
                        <div className={styles.desktop}>
                            <img src={require(`${state[2].img}`)} alt="" />
                            <div>
                                <p className={styles.title}>
                                    {state[2].title}
                                </p>
                                <p className={styles.desc}>
                                    {state[2].content}
                                </p>
                                <button className={styles.button} onClick={changeRouteToArticles}>
                                    К статьям
                                </button>
                            </div>
                        </div>

                        <div className={styles.tablet}>
                            <p className={styles.title}>
                                {state[2].title}
                            </p>
                            <div>
                                <img src={require(`${state[2].img}`)} alt="" />
                                <p className={styles.desc}>
                                    {state[2].content}
                                </p>
                            </div>
                            <button className={styles.button} onClick={changeRouteToArticles}>
                                К статьям
                            </button>
                        </div>

                        <div className={styles.phone}>
                            <p className={styles.title}>
                                {state[2].title}
                            </p>
                            <img src={require(`${state[2].img_hor}`)} alt="" />
                            <p className={styles.desc}>
                                {state[2].content}
                            </p>
                            <button className={styles.button} onClick={changeRouteToArticles}>
                                К статьям
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/*СЕКЦИЯ 4 ---- ПРО КОМПАНИЮ*/}
            <section id={styles.main4}>
                <div className={styles.rect}>
                    <div className={styles.content}>
                        <div className={styles.desktop}>
                            <img src={require(`${state[3].img}`)} alt="" />
                            <div>
                                <p className={styles.title}>
                                    {state[3].title}
                                </p>
                                <p className={styles.desc}>                                
                                    {state[3].content}
                                </p>
                                <button className={styles.button} onClick={changeRouteToAboutUs}>
                                    Узнать больше
                                </button>
                            </div>
                        </div>

                        <div className={styles.tablet}>
                            <p className={styles.title}>
                                {state[3].title}
                            </p>
                            <div>
                                <img src={require(`${state[3].img}`)} alt="" />
                                <p className={styles.desc}>
                                    {state[3].content}
                                </p>
                            </div>
                            <button className={styles.button} onClick={changeRouteToAboutUs}>
                                Узнать больше
                            </button>
                        </div>

                        <div className={styles.phone}>
                            <p className={styles.title}>
                                {state[3].title}
                            </p>
                            <img src={require(`${state[3].img_hor}`)} alt="" />
                            <p className={styles.desc}>
                                {state[3].content}
                            </p>
                            <button className={styles.button} onClick={changeRouteToAboutUs}>
                                Узнать больше
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Main;