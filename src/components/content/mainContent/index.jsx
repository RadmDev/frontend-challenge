import { datas } from "../../../assets/datas/tabledata";
import ArrowIcon from "../../../assets/images/arrow.png";
import Hero from "../../../assets/images/hero_image.png";
import FilterIcon from "../../../assets/images/main_filter_icon.png";
import PlusIcon from "../../../assets/images/main_plus_icon.png";
import PrintIcon from "../../../assets/images/main_print_icon.png";
import RefreshIcon from "../../../assets/images/main_refresh_icon.png";
import SearchIcon from "../../../assets/images/main_search_icon.png";
import DetailIcon from "../../../assets/images/tab_detail_icon.png";
import PencilIcon from "../../../assets/images/tab_pencil_icon.png";
import TrashIcon from "../../../assets/images/tab_trash_icon.png";
import Button from "../../button";

const MainContent = () => {
  const levelColor = (level) => {
    switch (level) {
      case "Juragan":
        return "bg-color-blue-accent text-color-blue-text-2";
      case "Konglomerat":
        return "bg-color-purple-accent text-color-purple-text-2";
      case "Sultan":
        return "bg-color-green-accent text-color-green-text-2";
      default:
        return "bg-color-orange-accent text-color-orange-text-2";
    }
  };

  return (
    <>
      <div className="flex flex-col overflow-y-hidden">
        <div className="relative p-6 bg-color-primary rounded-lg text-color-white flex flex-col gap-6">
          <img
            src={Hero}
            alt="Hero"
            className="absolute right-0 top-0 w-[678px] rounded-r-lg z-[1]"
          />
          <h3 className="text-xl font-semibold">Customer</h3>
          <p className="w-1/2">
            On this menu you will be able to create, edit, and also delete the
            customer. Also you can manage it easily.
          </p>
          <div className="flex items-center justify-between z-[2]">
            <Button
              yPadding="py-3"
              bgColor="bg-color-white bg-opacity-20"
              text="Add New Customer"
            >
              <img src={PlusIcon} alt="Plus" />
            </Button>
            <div className="w-1/2 relative">
              <img
                src={SearchIcon}
                alt="Search"
                className="absolute top-4 left-3"
              />
              <input
                type="text"
                className="w-full px-12 py-4 rounded-lg focus:outline-none text-color-black"
                placeholder="Search Customer"
              />
              <div className="absolute top-1 right-1">
                <Button
                  text="Search"
                  bgColor="bg-color-primary"
                  yPadding="py-2"
                />
              </div>
            </div>
            <Button
              bgColor="bg-color-white bg-opacity-20 backdrop-blur-sm"
              yPadding="py-3"
              text="Filter"
            >
              <img src={FilterIcon} alt="Filter" />
            </Button>
            <Button
              bgColor="bg-color-white bg-opacity-20 backdrop-blur-sm"
              yPadding="py-3"
              text="Refresh"
            >
              <img src={RefreshIcon} alt="Refresh" />
            </Button>
            <Button
              bgColor="bg-color-white bg-opacity-20 backdrop-blur-sm"
              yPadding="py-4"
            >
              <img src={PrintIcon} alt="Print" />
            </Button>
          </div>
        </div>
        <div className="w-full mt-6">
          <div className="bg-gray-100 grid grid-cols-5 rounded-lg text-color-gray-text">
            <div className="text-start px-6 py-4">Customer Name</div>
            <div className="text-start px-6 py-4">Level</div>
            <div className="text-start px-6 py-4">Favorite Menu</div>
            <div className="text-start px-6 py-4">Total Transaction</div>
            <div className="text-start px-6 py-4">Action</div>
          </div>
          <div className="flex flex-col gap-4 py-3 w-full max-h-[calc(100vh-500px)] overflow-y-auto">
            {datas?.map((data, index) => {
              return (
                <div key={index} className="grid grid-cols-5">
                  <td className="px-6 text-color-black font-semibold flex items-center">
                    {data.customer_name}
                  </td>
                  <td
                    className={`px-6 ${levelColor(
                      data.level
                    )} font-semibold text-center flex items-center justify-center  rounded-lg`}
                  >
                    {data.level}
                  </td>
                  <td className="px-6 text-color-black font-semibold flex items-center ">
                    {data.favorite_menu}
                  </td>
                  <td className="px-6 text-color-black font-semibold flex items-center ">
                    IDR {data.total_transaction}
                  </td>
                  <td className="px-6 text-color-black font-semibold flex items-center gap-1">
                    <Button bgColor="bg-gray-100" yPadding="py-3" text="Detail">
                      <img src={DetailIcon} alt="Detail" />
                    </Button>
                    <Button bgColor="bg-gray-100" yPadding="py-5">
                      <img src={PencilIcon} alt="Pencil" />
                    </Button>
                    <Button bgColor="bg-color-red-accent" yPadding="py-5">
                      <img src={TrashIcon} alt="Trash" />
                    </Button>
                  </td>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-3 text-base font-medium bg-gray-100 rounded-lg text-color-gray-text px-5 py-2 flex items-center justify-between">
          <p>Showing 10 Data Customers</p>
          <div className="flex gap-3">
            <PageButton isActive={true}>1</PageButton>
            <PageButton>2</PageButton>
            <PageButton>3</PageButton>
            <PageButton>...</PageButton>
            <PageButton>38</PageButton>
            <button className="flex items-center gap-1">
              Next <img src={ArrowIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const PageButton = ({ children, isActive }) => {
  return (
    <button
      className={`${
        isActive ? "text-color-black bg-color-white rounded-sm shadow-md" : ""
      } px-3 py-1`}
    >
      {children}
    </button>
  );
};

export default MainContent;
