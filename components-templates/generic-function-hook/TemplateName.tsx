import React, { useEffect, useState } from "react";
import styles from "./TemplateName.module.css";

interface ITemplateNameProps {
  children?: React.ReactNode;
}
interface ITemplateNameState{
  value?:undefined
}
const TemplateName: React.FC<ITemplateNameProps> = ({
  children = "TemplateName Component",
}) => {
  const [state, setstate] = useState<ITemplateNameState>({});
  useEffect(() => {
    //mount TemplateName
  
    return () => {
      //dismount TemplateName
    }
  }, [])
  
  return (
    <div className={styles.TemplateName} data-testid="TemplateName">
      {children}
    </div>
  );
};

export default TemplateName;
