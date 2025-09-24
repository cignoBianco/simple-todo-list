import React from 'react';
import { HeaderProps } from '../../interfaces/header';

import styles from './Header.module.css';


const Header: React.FC<HeaderProps> = ({todoCount}) => {
    return (<div className={styles.header_container}>
        <h2 className={styles.header_title}>Header</h2>
        <div>
            <p>Todo list <b>{todoCount}</b> task{todoCount > 1 ? 's' : ''}</p>
        </div>
    </div>);
};

export default Header;