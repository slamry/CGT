import styles from './Article.module.css';
import { useNavigate } from 'react-router-dom';

const Article = (props) => {
    let state = props.articlePage
    let navigate = useNavigate();
    const BACK_TO_ARTICLES = 'Обратно к статьям'

    const changeRouteToArticles = () => {
        let path = '/articles';
        navigate(path);
    }

    for (var i = 0; i < state.length; i++) {
        if (state[i].link === window.location.pathname) {
            return (
                <div className='wrapper'>
                    <div className={styles.content}>
                        <div className={styles.img}>
                            <img src={require(`${state[i].img}`)} alt="" />
                        </div>
                        <div className={styles.rect}>
                            <div className={styles.title}>
                                {state[i].title}
                            </div>
                            <div className={styles.text_content}>
                                {state[i].content}
                            </div>
                        </div>
                        <div className={styles.button_field}>
                            <button className={styles.back_to_articles} onClick={changeRouteToArticles}>
                                {BACK_TO_ARTICLES}
                            </button>
                        </div>
                    </div>
                </div>
            )
        }
    }
};

export default Article;