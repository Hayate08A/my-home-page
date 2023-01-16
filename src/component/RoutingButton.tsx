import { NavLink } from "react-router-dom";

type TRoutingProps = {
  text: string;
  path: string;
};

const RoutingButton = (props: TRoutingProps) => {
  return (
    <div className="routing-button">
      <NavLink to={props.path}>{props.text ? props.text : props.path}</NavLink>
    </div>
  );
};

export default RoutingButton;
