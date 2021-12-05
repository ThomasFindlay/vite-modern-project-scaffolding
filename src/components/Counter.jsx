import { useState } from "react";
import styles from "./counter.module.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.counter}>
      <button type="button" onClick={() => setCount(count => count + 1)}>
        count is: {count}
      </button>
    </div>
  );
};

export default Counter;
