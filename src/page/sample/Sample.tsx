import RoutingButton from "../../component/RoutingButton";
import routingPath from "../../routing/routing-path";

const Profile = () => {
  return (
    <div className=" Profile">
      Profile
      <RoutingButton text='ホーム' path={routingPath.home} />
    </div>
  );
};

export default Profile;
