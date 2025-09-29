// ActiveButton.tsx
import React from 'react';

import Button from '../../Button';

import styles from './ActiveButton.module.css';

interface ActiveButtonProps extends React.ComponentProps<typeof Button> {
  isActive: boolean;
}

const ActiveButton: React.FC<ActiveButtonProps> = ({ isActive, className = '', ...props }) => {
  const activeClass = isActive ? styles.button_active : '';
  const combinedClassName = `${className} ${activeClass}`.trim();

  return (
    <Button
      {...props}
      className={combinedClassName}
    />
  );
};

export default ActiveButton;