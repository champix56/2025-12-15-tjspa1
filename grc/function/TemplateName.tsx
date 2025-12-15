import React, { useEffect, useState } from 'react';
import styles from './TemplateName.module.css';

interface ITemplateNameProps {
  children: string
}
interface ITemplateNameState {

}
const TemplateName: React.FC<ITemplateNameProps> = ({ children = 'TemplateName component' }) => {
  const [state, setstate] = useState<ITemplateNameState>({})
  useEffect(() => {

  }, [])
  return (
    <div className={styles.TemplateName} data-testid="TemplateName">
      {children}
    </div>
  );
}
export default TemplateName;
