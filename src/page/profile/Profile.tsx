import RoutingButton from '../../component/RoutingButton';
import routingPath from '../../routing/routing-path';

const Home = () => {
  return (
    <div className="home">
      Home
      <RoutingButton text='aaa' path={routingPath.home}/>
    </div>
  );
};

export default Home;
