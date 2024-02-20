import Content from "../../components/content";
import NavigationBar from "../../components/navigationbar";
import Sidebar from "../../components/sidebar";

const MainLayout = () => {
  return (
    <>
      <div className="w-full h-full flex px-6 pt-6">
        <div className="w-2/12">
          <Sidebar />
        </div>
        <div className="w-full flex flex-col pl-6">
          <div className="border-b-2 border-b-gray-200">
            <NavigationBar />
          </div>
          <div className="pt-3">
            <Content />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
