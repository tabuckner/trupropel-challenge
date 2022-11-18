import UserForm from '../../components/user-form/user-form';
import styles from './my-form.module.scss';

const MyForm = () => {
  return (
    <div className={styles['my-form']}>
      <p>MyForm Works!</p>
      <UserForm></UserForm>
    </div>
  );
}

export default MyForm;