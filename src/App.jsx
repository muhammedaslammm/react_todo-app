import LeftComponent from "./components/Left";
import RightComponent from "./components/Right";

let Application = () => {
  return (
    <div className="todo__container">
      <LeftComponent />
      <RightComponent />
    </div>
  );
};

export default Application;
