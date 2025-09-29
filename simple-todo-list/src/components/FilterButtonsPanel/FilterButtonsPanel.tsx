import React from 'react';

import styles from './FilterButtonsPanel.module.css';
import ActiveButton from './ActiveButton';


interface FilterButtonsPanelProps {
    currentMode: 'ALL' | 'ACTIVE' | 'DONE';
    onClickHandler: (filter: 'ALL' | 'ACTIVE' | 'DONE') => void
}

const FilterButtonsPanel: React.FC<FilterButtonsPanelProps> = ({onClickHandler, currentMode}) => {

    return (<div className={styles.filterButtonsPanel}>
        <ActiveButton isActive={currentMode === 'ALL'} color='blue' onClick={() => onClickHandler('ALL')}>All</ActiveButton>
        <ActiveButton isActive={currentMode === 'ACTIVE'} color='blue' onClick={() => onClickHandler('ACTIVE')}>To Do</ActiveButton>
        <ActiveButton isActive={currentMode === 'DONE'} color='blue' onClick={() => onClickHandler('DONE')}>Done</ActiveButton>
    </div>);
};

export default FilterButtonsPanel;