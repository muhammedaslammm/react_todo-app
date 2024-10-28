import ReactDOM from "react-dom/client";
import LeftComponent from "./components/leftComponent";
import RightComponent from "./components/rightComponent";

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
