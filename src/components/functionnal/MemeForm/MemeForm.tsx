import React, { useEffect, useState } from "react";
import styles from "./MemeForm.module.css";

interface IMemeFormProps {
  children?: React.ReactNode;
}
interface IMemeFormState{
  value?:undefined
}
const MemeForm: React.FC<IMemeFormProps> = ({
  children = "MemeForm Component",
}) => {
  const [state, setstate] = useState<IMemeFormState>({});
  useEffect(() => {
    //mount MemeForm
  
    return () => {
      //dismount MemeForm
    }
  }, [])
  
  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      {children}
    </div>
  );
};

export default MemeForm;
