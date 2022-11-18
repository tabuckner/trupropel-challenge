import { Button } from "@mui/material";
import ComponentOne from "../../components/component-one/component-one";
import ComponentTwo from "../../components/component-two/component-two";
import MyForm from "../../modules/forms/views/my-form/my-form";
import JSONPlaceholderList from "../../modules/json-placeholder/views/json-placeholder-list/json-placeholder-list";
import styles from './my-view.module.scss';

const MyView = () => {
  return (
    <div className={styles['my-view']}>
      <div className={styles.section}>
        <ComponentOne />
        <ComponentTwo />
        <MyForm></MyForm>
        <Button variant="contained">MUI Library Works!</Button>
      </div>
      <div className={styles.section}>
        <JSONPlaceholderList />
      </div>
    </div>
  );
}

export default MyView;