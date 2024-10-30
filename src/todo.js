import ReactDOM from "react-dom/client";
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

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Application />);
