import MainContent from "./mainContent";
import SideContent from "./sideContent";

const Content = () => {
  return (
    <>
      <div className="w-full flex">
        <div className="w-4/5">
          <MainContent />
        </div>
        <div className="w-1/5">
          <SideContent />
        </div>
      </div>
    </>
  );
};

export default Content;
