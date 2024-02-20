const NavigationBar = () => {
  return (
    <>
      <div className="flex">
        <div className="w-1/2 pb-6 flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Customer</h1>
          <p className="text-color-gray-text">
            You can manage and organize your customer and other things here
          </p>
        </div>
        <div className="w-1/2 flex justify-between items-end">
          <button className="text-center text-xl font-semibold text-color-primary border-b-4 border-b-color-primary flex-grow py-2">
            Customer
          </button>
          <button className="text-center text-xl text-color-gray-text font-semibold flex-grow py-2">
            Promo
          </button>
          <button className="text-center text-xl text-color-gray-text font-semibold flex-grow py-2">
            Voucher
          </button>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
