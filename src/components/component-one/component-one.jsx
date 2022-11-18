import styles from './component-one.module.scss';

const ComponentOne = () => {
  return (
    <div className={styles['component-one']}>
      <p className={styles.text}>ComponentOne Works!</p>
    </div>
  );
}

export default ComponentOne;