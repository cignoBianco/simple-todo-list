import React from 'react';

import styles from './FilterButtonsPanel.module.css';
import Button from '../Button';


interface FilterButtonsPanelProps {
    currentMode: 'ALL' | 'ACTIVE' | 'DONE';
    onClickHandler: (filter: 'ALL' | 'ACTIVE' | 'DONE') => void
}

const FilterButtonsPanel: React.FC<FilterButtonsPanelProps> = ({onClickHandler, currentMode}) => {

    return (<div className={styles.filterButtonsPanel}>
        <Button color='blue' onClick={() => onClickHandler('ALL')}>All</Button>
        <Button color='blue' onClick={() => onClickHandler('ACTIVE')}>To Do</Button>
        <Button color='blue' onClick={() => onClickHandler('DONE')}>Done</Button>
    </div>);
};

export default FilterButtonsPanel;