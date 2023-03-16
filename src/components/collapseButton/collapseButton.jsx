import { ReactComponent as Icon } from "../../assets/collapse.svg";
import "./collapseButton.styles.scss";
const CollapseButton = ({ children, ...otherProps }) => {
  return (
    <button className="cta" {...otherProps}>
      <Icon />
    </button>
  );
};
export default CollapseButton;
