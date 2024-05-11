import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import CreatePost from "./Components/CreatePost";
import PostList from "./Components/PostList";
import { useState } from "react";
import PostListStore from "./Components/store/PostListStore";

const App = () => {
  const [navigation, setNavigation] = useState("Home");

  return (
    <>
      <PostListStore>
        <div className="container">
          <Header />
          <div className="CombineSC">
            <Sidebar navigation={navigation} setNavigation={setNavigation} />
            {navigation === "Home" ? <PostList /> : <CreatePost />}
          </div>
        </div>
      </PostListStore>
    </>
  );
};

export default App;
