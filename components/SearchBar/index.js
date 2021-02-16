import styles from './search.module.css'

import React from 'react'

const SearchBar = ({...rest}) => {
    return (
        <div className={styles.coin_search}>
            <input className={styles.coin_input} {...rest}/>
        </div>
    );
};

export default SearchBar;
