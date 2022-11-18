import styles from './json-placeholder-list-item.module.scss';

const JsonPlaceholderListItem = ({ post }) => {
  return (
    <div className={styles['json-placeholder-list-item']}>
      <div className={styles.title}>{post.title}</div>
      <div className={styles.body}>{post.body}</div>
    </div>
  );
}

export default JsonPlaceholderListItem;