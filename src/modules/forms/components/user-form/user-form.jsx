import { Button, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import styles from './user-form.module.scss';

const FORM_FIELDS = {
  FirstName: 'firstName',
};

const UserForm = () => {
  // Dependencies
  const { control, handleSubmit } = useForm({
    mode: 'all',
    defaultValues: {
      [FORM_FIELDS.FirstName]: 'Basura Buckner'
    }
  });

  // Handlers
  const onSubmit = (data) => console.warn(data);

  return (
    <div className={styles['user-form']}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.row}>
          <Controller
            name={FORM_FIELDS.FirstName}
            control={control}
            render={({ field }) => (
              <TextField
                required
                id={FORM_FIELDS.FirstName}
                {...field}
              />
            )}
          />
        </div>
        <div className={styles.row}>
          <Button type="submit" color='secondary' variant='contained'>Submit</Button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;