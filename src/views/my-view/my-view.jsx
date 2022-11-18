import { Button } from "@mui/material";
import ComponentOne from "../../components/component-one/component-one";
import ComponentTwo from "../../components/component-two/component-two";
import JSONPlaceholderList from "../../modules/json-placeholder/views/json-placeholder-list/json-placeholder-list";
import styles from './my-view.module.scss';

const MyView = () => {
  return (
    <div className={styles['my-view']}>
      <ComponentOne />
      <ComponentTwo />
      <Button variant="contained">MUI Library Works!</Button>
      <JSONPlaceholderList />
    </div>
  );
}

export default MyView;