const SideMenu = (props) => {
  const { imageUrl, text, notifValue, hrefTo, isActive } = props;

  return (
    <>
      <a
        href={hrefTo}
        className="w-full flex items-center justify-between pr-6"
      >
        <div className="w-full flex items-center gap-2">
          <div className="w-[14px] h-[14px]">
            <img src={imageUrl} alt={text} className="w-full" />
          </div>
          <div
            className={`text-base text-color-gray-text font-semibold ${
              isActive && "text-color-primary"
            }`}
          >
            {text}
          </div>
        </div>
        {notifValue && (
          <div className="py-1 px-3 bg-gradient-to-r from-color-orange-text-1 text-sm to-color-orange-text-2 text-color-white rounded-full">
            {notifValue}
          </div>
        )}
      </a>
    </>
  );
};

export default SideMenu;
