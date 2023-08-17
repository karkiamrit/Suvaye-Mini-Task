import { useMemo } from "react";

const Nav = ({
  imageAltText,
  searchResultText,
  carModelImageUrl,
  componentName,
  showNighmodeIcon,
  showRectangleDiv,
  showDiv,
  divVisible,
  divVisible1,
  divVisible2,
  divVisible3,
  showActive,
  showVectorIcon,
  showHovered,
  navPosition,
  navTop,
  navLeft,
  logoWidth,
  logoHeight,
  divTop,
  divLeft,
  divColor,
  statesHeight,
  statesWidth,
  statesRight,
  statesBottom,
  activeHeight,
  activeWidth,
  activeTop,
  activeRight,
  activeBottom,
  activeLeft,
}) => {
  const navStyle = useMemo(() => {
    return {
      position: navPosition,
      top: navTop,
      left: navLeft,
    };
  }, [navPosition, navTop, navLeft]);

  const logoStyle = useMemo(() => {
    return {
      width: logoWidth,
      height: logoHeight,
    };
  }, [logoWidth, logoHeight]);

  const divStyle = useMemo(() => {
    return {
      top: divTop,
      left: divLeft,
    };
  }, [divTop, divLeft]);

  const div1Style = useMemo(() => {
    return {
      color: divColor,
    };
  }, [divColor]);

  const statesStyle = useMemo(() => {
    return {
      height: statesHeight,
      width: statesWidth,
      right: statesRight,
      bottom: statesBottom,
    };
  }, [statesHeight, statesWidth, statesRight, statesBottom]);

  const activeStyle = useMemo(() => {
    return {
      height: activeHeight,
      width: activeWidth,
      top: activeTop,
      right: activeRight,
      bottom: activeBottom,
      left: activeLeft,
    };
  }, [
    activeHeight,
    activeWidth,
    activeTop,
    activeRight,
    activeBottom,
    activeLeft,
  ]);

  return (
    <div
      className="relative w-[1240px] h-[100px] text-center text-3xl text-darkslategray-100 font-vazirmatn"
      style={navStyle}
    >
      {showNighmodeIcon && (
        <img
          className="absolute top-[24px] left-[0px] w-[50px] h-[53px]"
          alt=""
          src={imageAltText}
        />
      )}
      <div
        className="absolute top-[22px] left-[1186px] w-14 h-14 text-17xl"
        style={logoStyle}
      >
        {showRectangleDiv && (
          <div className="absolute top-[21.33px] left-[2.42px] rounded-xl bg-darkslategray-100 w-[38px] h-[38px] [transform:_rotate(-25deg)] [transform-origin:0_0] opacity-[0.07]" />
        )}
        {showDiv && (
          <div
            className="absolute top-[0%] left-[0%] font-black"
            style={divStyle}
          />
            
          
        )}
      </div>
      {divVisible && (
        <div className="absolute h-[43.59%] w-[3.95%] top-[30%] left-[64.03%] flex items-center justify-center opacity-[0.6]"/>
      )}
      {divVisible1 && (
        <div className="absolute h-[43.59%] w-[5.24%] top-[30%] left-[73.39%] text-deepskyblue-200 flex items-center justify-center">
          {searchResultText}
        </div>
      )}
      <div className="absolute h-[43.59%] w-[7.58%] top-[30%] left-[37.02%] flex items-center justify-center opacity-[0.6]">
        {carModelImageUrl}
      </div>
      {divVisible2 && (
        <div
          className="absolute h-[43.59%] w-[11.85%] top-[28%] left-[19.84%] flex items-center justify-center"
          style={div1Style}
        >
          {componentName}
        </div>
      )}
      {divVisible3 && (
        <div className="absolute h-[43.59%] w-[8.63%] top-[30%] left-[50%] flex items-center justify-center opacity-[0.6]"/>

        
      )}
      <div
        className="absolute h-[10%] w-[9.03%] top-[0%] right-[19.52%] bottom-[90%] left-[71.45%]"
        style={statesStyle}
      >
        {showActive && (
          <div
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-none rounded-b-2xl bg-deepskyblue-200"
            style={activeStyle}
          />
        )}
      </div>
      {showVectorIcon && (
        <img
          className="absolute top-[44px] left-[223px] w-3.5 h-3.5 opacity-[0.5]"
          alt=""
          src="/vector.svg"
        />
      )}
      {showHovered && (
        <div className="absolute h-[10%] w-[15.16%] top-[0%] right-[67.18%] bottom-[90%] left-[17.66%] rounded-t-none rounded-b-2xl bg-lightgray" />
      )}
    </div>
  );
};

export default Nav;
