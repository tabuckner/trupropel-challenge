import { useGetPostsQuery } from '../../../../services/api';
import JsonPlaceholderListItem from '../../components/json-placeholder-list-item/json-placeholder-list-item';
import styles from './json-placeholder-list.module.scss';

const JSONPlaceholderList = () => {
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetPostsQuery();

  return (

    <div className={styles['json-placeholder-list']}>
      <p>JSONPlaceholderList Works!</p>
      {isLoading
        ? <p>Loading...</p>
        : posts.map(post => (<JsonPlaceholderListItem post={post} key={post.id} />))}
    </div>
  );
}

export default JSONPlaceholderList;