import RoutingButton from "../../../component/RoutingButton";
import "./Header.scss";
// import routingPath from "../../../routing/routing-path";

type menu = {
  title: string;
  path: string;
};

export type THeaderProps = {
  title: string;
  menus: menu[];
};

export const Header = (props: THeaderProps) => {
  return (
    <div className="header">
      <div className="header__title">{props.title}</div>
      <div className="header__menu">
        {props.menus.map((menu, i) => {
          return (
            <div
              className="header__menu__chunk"
              key={`header__menu__chunk${i}`}
            >
              <RoutingButton text={menu.title} path={menu.path} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
