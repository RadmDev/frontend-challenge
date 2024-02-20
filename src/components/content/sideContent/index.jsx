import CardBottom from "../../../assets/images/bottom_card.png";
import CardBg from "../../../assets/images/sidecard.png";
import Top1 from "../../../assets/images/top1.png";
import Button from "../../button";

const SideContent = () => {
  return (
    <>
      <div className="w-full px-12 flex flex-col gap-6">
        <div className="w-[227px] relative">
          <img src={CardBg} alt="" />
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="w-full h-full p-6 text-white flex flex-col justify-between">
              <h3 className="text-xl">See analytics of the Customer Clearly</h3>
              <Button
                text="See Analytics"
                bgColor="bg-color-white bg-opacity-20"
                yPadding="py-3"
              />
            </div>
          </div>
        </div>
        <div className="w-[227px] relative">
          <img src={CardBottom} alt="" />
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="w-full h-full p-6 text-color-black flex flex-col">
              <h3 className="text-2xl text-color-black font-bold">
                Top Menu <br />
                <span className="text-color-orange-text-2">This Week</span>
              </h3>
              <p className="pt-6 text-sm">10 - 12 Agustus 2023</p>
              <div className="relative pt-3 text-base font-semibold p-2 bg-color-white shadow-md rounded-lg">
                Nasi Goreng Jamur Special Resto Pak Min
                <img
                  src={Top1}
                  alt=""
                  className="absolute z-10 top-0 -right-3"
                />
              </div>
              <ul className="text-sm mt-3 flex flex-col gap-2">
                <li>2. Tongseng Sapi Gurih</li>
                <li>3. Nasi Gudeg Telur Ceker</li>
                <li>4. Nasi Ayam serundeng</li>
                <li>5. Nasi Goreng Seafood</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideContent;
