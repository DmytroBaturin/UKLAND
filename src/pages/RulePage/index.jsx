import styles from "./index.module.scss";
import { useEffect } from "react";
import rulesData from "../../rules.json";
export const RulePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className={styles.root}>
      <div className={styles.rule}>
        {Object.keys(rulesData).map((category, index) => (
          <div key={index} className={styles.rules}>
            <h1>{category}</h1>
            <ul>
              {rulesData[category].map((rule, i) => (
                <li key={i}>{rule}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
