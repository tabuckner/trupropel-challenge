import styles from './component-two.module.scss';

const ComponentTwo = () => {
  return (
    <div className={styles['component-two']}>
      <p className={styles.text}>ComponentTwo Works!</p>
    </div>
  );
}

export default ComponentTwo;