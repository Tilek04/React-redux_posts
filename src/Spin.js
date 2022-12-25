import { useDispatch, useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import { appReducer } from "./redux/appReducer";

const Spin = (props) => {
    const spinner = useSelector(state => state.appReducer.loading
    );console.log("spinner >>>", spinner);
  return (
    <div className="loader-style">
      <Loader type="TailSpin" color="#00BFFF"  height={100} visible={spinner} />
    </div>
  );
};

export default Spin