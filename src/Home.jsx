import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Tab from "./Tab";
import ShinyBackground from "./ShinyBackground";

function Home() {
  return (
    <>
      <div className="h-[calc(100vh-40px)] bg-main flex text-white">
        <div className="w-[300px] bg-main">
          <Sidebar></Sidebar>
        </div>

        <div className="w-[calc(100vw-300px)] bg-main">
          <div className="h-[40px] bg-main">
            <Tab></Tab>
          </div>

          <div className="bg-main">
            <ShinyBackground></ShinyBackground>
          </div>
        </div>
      </div>

      <div className="h-[40px] bg-main text-white border-1 border-gray">
        <Footer></Footer>
      </div>
    </>
  );
}

export default Home;
