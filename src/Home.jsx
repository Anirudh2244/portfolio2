import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Tab from "./Tab";
import ShinyBackground from "./ShinyBackground";

function Home() {
  return (
    <>
      <div className="h-[calc(100vh-40px)] bg-main flex border-1 border-gray">
        <div className="w-[250px] bg-main">
          <Sidebar></Sidebar>
        </div>

        <div className="w-[calc(100vw-250px)] bg-main">
          <div className="h-[40px] bg-main">
            <Tab></Tab>
          </div>

          <div className="bg-main">
            <ShinyBackground></ShinyBackground>
          </div>
        </div>
      </div>

      <div className="h-[40px] bg-main border-b-1 border-gray">
        <Footer></Footer>
      </div>
    </>
  );
}

export default Home;
