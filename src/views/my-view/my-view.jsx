import { Button } from "@mui/material";
import ComponentOne from "../../components/component-one/component-one";
import ComponentTwo from "../../components/component-two/component-two";

const MyView = () => {
  return (
    <div className="my-view">
      <ComponentOne />
      <ComponentTwo />
      <Button variant="contained">MUI Library Works!</Button>
    </div>
  );
}

export default MyView;