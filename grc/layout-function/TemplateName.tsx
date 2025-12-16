import React from 'react';
import styles from './TemplateName.module.css';

interface ITemplateNameProps {
  children: Array<React.ReactNode>|React.ReactNode;
  parentStyle?:React.CSSProperties
}
const TemplateName: React.FC<ITemplateNameProps> = ({ parentStyle,children = 'TemplateName component' }) => {
  return (
    <div className={styles.TemplateName} data-testid="TemplateName" style={parentStyle}>
      {children}
    </div>
  );
}
export default TemplateName;
