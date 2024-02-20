import Avatar from "../../assets/images/avatar.png";
import BrandLogo from "../../assets/images/brand_logo.png";
import Stock2Icon from "../../assets/images/side_cart_icon.png";
import CustomerIcon from "../../assets/images/side_cust_icon.png";
import DashboardIcon from "../../assets/images/side_dash_icon.png";
import DesignIcon from "../../assets/images/side_design_icon.png";
import LogoutIcon from "../../assets/images/side_logout_icon.png";
import ReportIcon from "../../assets/images/side_report_icon.png";
import RestaurantIcon from "../../assets/images/side_resto_icon.png";
import RoleIcon from "../../assets/images/side_role_icon.png";
import SettingsIcon from "../../assets/images/side_sett_icon.png";
import StockIcon from "../../assets/images/side_stock_icon.png";
import SupplyIcon from "../../assets/images/side_supply_icon.png";
import SideMenu from "../sidemenu";

const Sidebar = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col border-r-2 border-r-gray-200">
        <div className="w-full h-3/4 flex flex-col">
          <div id="logoBrand">
            <a href="/">
              <img
                src={BrandLogo}
                alt="brand logo"
                className="w-[112.62px] h-[35px]"
              />
            </a>
          </div>
          <div id="content" className="mt-6 flex flex-col">
            <h2 className="text-color-gray-text text-sm">Menu</h2>
            <div id="subContent1" className="pt-2 flex flex-col gap-5">
              <SideMenu
                hrefTo="/"
                text="Dashboard"
                imageUrl={DashboardIcon}
                notifValue={4}
              />
              <SideMenu hrefTo="/" text="Stock" imageUrl={StockIcon} />
              <SideMenu
                hrefTo="/"
                text="Customer"
                imageUrl={CustomerIcon}
                isActive={true}
              />
              <SideMenu
                hrefTo="/"
                text="Restaurant"
                imageUrl={RestaurantIcon}
              />
              <SideMenu hrefTo="/" text="Design" imageUrl={DesignIcon} />
              <SideMenu hrefTo="/" text="Report" imageUrl={ReportIcon} />
              <SideMenu hrefTo="/" text="Role & Admin" imageUrl={RoleIcon} />
              <SideMenu hrefTo="/" text="Settings" imageUrl={SettingsIcon} />
            </div>
            <h2 className="text-color-gray-text mt-6 text-sm">Integration</h2>
            <div id="subContent2" className="pt-2 flex flex-col gap-5 ">
              <SideMenu hrefTo="/" text="Stock" imageUrl={Stock2Icon} />
              <SideMenu hrefTo="/" text="Supply" imageUrl={SupplyIcon} />
            </div>
          </div>
        </div>
        <div className="w-full h-1/4 border-t-2 border-t-gray-200 flex flex-col gap-6 pt-6 pr-6">
          <div className="flex p-2 items-center justify-between">
            <div className="w-14 h-w-14 overflow-hidden">
              <img
                src={Avatar}
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold text-color-black">
                Savannah N
              </h3>
              <p className="text-sm text-color-gray-text">
                Food Quality Manager
              </p>
            </div>
          </div>
          <button className="p-2 bg-color-red-accent text-color-red-text flex gap-3 text-xl font-semibold text-center items-center justify-center rounded-lg">
            <img src={LogoutIcon} alt="logout icon" className="w-6 h-6" />
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
