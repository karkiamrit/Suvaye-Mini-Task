import { redirect } from "react-router-dom";
import Button from "./Button";

const Share = () => {
  return (
    <div className="absolute top-[1006px] left-[229px] w-[981px] h-[305px] text-center text-31xl text-white font-vazirmatn">
      <div className="absolute top-[96.44px] left-[-26px] rounded-46xl bg-whitesmoke w-[1046px] h-[199px]" />
      <div className="absolute top-[78.29px] left-[2.17px] rounded-56xl bg-deepskyblue-100 w-[988.08px] h-[226.52px] [transform:_rotate(-2.4deg)] [transform-origin:0_0]" />
      <div className="absolute top-[106.11px] left-[602.04px] font-black [text-shadow:0px_5px_0px_rgba(0,_0,_0,_0.25)] [transform:_rotate(-3.18deg)] [transform-origin:0_0]">
        suvaye.official
      </div>
      <div className="absolute top-[203.3px] left-[458.92px] text-5xl font-medium [transform:_rotate(-3.79deg)] [transform-origin:0_0] opacity-[0.9]" >
        Follow us on twitter for latest updates
      </div>
      <div className="absolute top-[120px] left-[516px] w-[71.17px] h-[51.42px]">
        <a href='https://twitter.com'>
        <div className="absolute top-[0px] left-[0px] w-[71.17px] h-[51.42px]">
          
          <Button
            rectangle10="/rectangle-101.svg"
            prop="123"
            showDiv={false}
            buttonPosition="absolute"
            buttonWidth="67.54px"
            buttonHeight="45.88px"
            buttonTop="12.71px"
            buttonLeft="0px"
            buttonTransform=" rotate(-4.85deg)"
            buttonTransformOrigin="0 0"
            rectangleIconHeight="115.16%"
            rectangleIconWidth="101.55%"
            rectangleIconTop="-9.62%"
            rectangleIconRight="-3.47%"
            rectangleIconBottom="-5.54%"
            rectangleIconLeft="1.92%"
            divTop="20.6%"
            divLeft="17.58%"
            divFontWeight="500"
            // redirectUrl="https://twitter.com" 

          />
          <img
            className="absolute top-[15px] left-[23px] w-[29px] h-6"
            alt=""
            src="/vector1.svg"
          />
        </div>
        </a>
      </div>
      <img
        className="absolute top-[-55px] left-[54px] w-[300px] h-[301px] object-cover"
        alt=""
        src="/group-6-2-2@2x.png"
      />
      
    </div>
    
  );
};

export default Share;
