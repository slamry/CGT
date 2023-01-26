import styles from './Articles.module.css';
import { NavLink } from 'react-router-dom';
import React, { useState } from "react";
// import store from '../../redux/store';

var data;

const DEFCATNAME = 'Категория'
const CAT1NAME = 'Человек-Природа'
const CAT2NAME = 'Человек-Техника'
const CAT3NAME = 'Человек-Человек'
const CAT4NAME = 'Человек-Система'

var defCat = 0;
var cat1 = 1;
var cat2 = 2;
var cat3 = 3;
var cat4 = 4;

const Article = (props) => {
    var img = require(`${data[props.category - 1].img}`)
    return (
        <div className={styles.rect}>
            <div className={styles.test__content}>
                <div className={styles.img}>
                    <img src={img} alt="" className={styles.pic} />
                </div>
                <div className={styles.text}>
                    <p className={styles.title}>
                        <NavLink to={data[props.category - 1].link}
                            className={styles.test__link}>
                            {data[props.category - 1].title}
                        </NavLink>
                    </p>
                    <p className={styles.desc}>
                        {data[props.category - 1].description}
                    </p>
                </div>
            </div>
        </div>
    )
}

const SelectArea = (props) => {

    const handleChange = (event) => {
        const value = event.target.value;
        props.setSelectedOption(parseInt(value))
    }

    return (
        <select name={styles.test_category} onChange={handleChange}>
            <option value={defCat}>{DEFCATNAME}</option>
            <option value={cat1}>{CAT1NAME}</option>
            <option value={cat2}>{CAT2NAME}</option>
            <option value={cat3}>{CAT3NAME}</option>
            <option value={cat4}>{CAT4NAME}</option>
        </select>
    )
};

const ArticlesArea = ({ selectedOption }) => {
    if (selectedOption === defCat) {
        return (
            <div className={styles.tests}>
                <Article
                    category={cat1} />
                <Article
                    category={cat2} />
                <Article
                    category={cat3} />
                <Article
                    category={cat4} />
                <Article
                    category={cat1 + 4} />
                <Article
                    category={cat2 + 4} />
                <Article
                    category={cat3 + 4} />
                <Article
                    category={cat4 + 4} />
                <Article
                    category={cat1 + 8} />
                <Article
                    category={cat2 + 8} />
                <Article
                    category={cat3 + 8} />
                <Article
                    category={cat4 + 8} />
            </div>
        )
    }
    if (selectedOption === cat1) {
        return (
            <div className={styles.tests}>
                <Article
                    category={cat1} />
                <Article
                    category={cat1 + 4} />
                <Article
                    category={cat1 + 8} />
            </div>
        )
    }
    if (selectedOption === cat2) {
        return (
            <div className={styles.tests}>
                <Article
                    category={cat2} />
                <Article
                    category={cat2 + 4} />
                <Article
                    category={cat2 + 8} />
            </div>
        )
    }
    if (selectedOption === cat3) {
        return (
            <div className={styles.tests}>
                <Article
                    category={cat3} />
                <Article
                    category={cat3 + 4} />
                <Article
                    category={cat3 + 8} />
            </div>
        )
    }
    if (selectedOption === cat4) {
        return (
            <div className={styles.tests}>
                <Article
                    category={cat4} />
                <Article
                    category={cat4 + 4} />
                <Article
                    category={cat4 + 8} />
            </div>
        )
    }
};

const Articles = (props) => {
    data = props.articlesListPage

    const [selectedOption, setSelectedOption] = useState(0);

    return (
        <div className='wrapper'>
            <div className={styles.content}>
                <SelectArea
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption} />

                <ArticlesArea
                    selectedOption={selectedOption} />
            </div>
        </div>
    )
};

export default Articles;