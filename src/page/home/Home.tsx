import * as utility from "../../utility/index";
import "./home.scss";

const lists: string[] = ["NEW!!", "ソート", "カテゴリ", "ランダム"];

const Home = () => {
  console.log("Home");
  return (
    <div className="home">
      <form name="fileinfo">
        画像アップロード
        {/* <input type="file" onChange={(e) => utility.imageUpload(e)} /> */}
        <input
          id="web-worker"
          type="file"
          name="image"
          accept="image/*"
          onChange={(e) => utility.compressImage(e)}
        />
        <button type="submit">送信</button>
        <span id="web-worker-progress"></span>
        <p id="web-worker-result"></p>
      </form>
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
