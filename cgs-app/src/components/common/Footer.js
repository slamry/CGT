import styles from './Footer.module.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.logo}>
                        <p className={styles.abbr}>
                            CGT
                        </p>
                        <p className={styles.decoding}>
                            Career Guidance Testing
                        </p>
                    </div>
                    <NavLink className={styles.footlink} to='/'>Главная</NavLink>
                    <NavLink className={styles.footlink} to='/articles'>Статьи</NavLink>
                    <NavLink className={styles.footlink} to='/tests'>Тесты</NavLink>
                    <NavLink className={styles.footlink} to='/aboutus'>О нас</NavLink>
                    <div className={styles.contactus}>
                        <p>Связаться с нами:</p>
                        <ul>
                            <li><p>+375 29 111 11 11</p></li>
                            <li><p>cgt@gmail.com</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;