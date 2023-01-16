import * as utility from "../../utility/index";
import "./home.scss";

const lists: string[] = ["NEW!!", "ソート", "カテゴリ", "ランダム"];

const Home = () => {
  console.log("Home");
  return (
    <div className="home">
      <button>
        画像アップロード
        <input type="file" onChange={(e) => utility.imageUpload(e)} />
      </button>
      {/* <button onClick={() => utility.consoleLog("test")}>test</button> */}
      <div className="home__lists_wrap responsive">
        {lists.map((title, i) => {
          return (
            <div className="list" key={`$lists_${i}`}>
              {title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
