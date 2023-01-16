import "./App.scss";
import "./firebase";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, THeaderProps } from "./component/common/header/Header";
import Footer from "./component/common/footer/Footer";
import Home from "./page/home/Home";
import Profile from "./page/profile/Profile";
import routingPath from "./routing/routing-path";

function App() {
  const headerProps: THeaderProps = {
    title: "写真！！",
    menus: [
      {
        title: "ほーむ！",
        path: routingPath.home,
      },
      {
        title: "プロフィール！",
        path: routingPath.profile,
      },
    ],
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header title={headerProps.title} menus={headerProps.menus} />
        <Routes>
          <Route index element={<Home />} />
          <Route path={routingPath.profile} element={<Profile />} />
        </Routes>
        <Footer copyright="〜写真のサイト〜" />
      </BrowserRouter>
    </div>
  );
}

export default App;
