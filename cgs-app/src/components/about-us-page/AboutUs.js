import styles from './AboutUs.module.css';

const AboutUs = (props) => {
    
    let state = props.aboutUsPage

    return (
        <div className='wrapper'>
            <div className={styles.content}>
                <section>
                    <img className={styles.img} src={require(`${state[0].img}`)} alt="" />
                    <p className={styles.title}>
                        {state[0].title}
                    </p>
                    <p className={styles.desc}>
                        {state[0].description}
                    </p>
                </section>
                <section>
                    <img className={styles.img} src={require(`${state[1].img}`)} alt="" />
                    <p className={styles.title}>
                        {state[1].title}
                    </p>
                    <p className={styles.desc}>
                        {state[1].description}
                    </p>
                </section>
                <section>
                    <img className={styles.img} src={require(`${state[2].img}`)} alt="" />
                    <p className={styles.title}>
                        {state[2].title}
                    </p>
                    <p className={styles.desc}>
                        {state[2].description}
                    </p>
                </section>
            </div>
        </div>
    )
}

export default AboutUs;