import Share from "../components/Share";
import Nav from "../components/Nav";
import axios from 'axios';
import { useState } from "react";

const FrontendInternTask = () => {
  const [searchvalue,setSearchValue]=useState("");
  function handleSearch(e){
     const search=e.target.value;
     setSearchValue(search);
     console.log(search)
  }

  return (
    <div className="relative bg-white w-full h-[1511px] overflow-hidden text-left text-xl text-black font-vazirmatn">
      <Share />
      <div className="absolute top-[214px] left-[230px] w-[980px] h-[626px] overflow-x-auto font-text-xl-regular">
        <div className="absolute top-[3px] left-[-1px] rounded-16xl bg-white shadow-[0px_2px_0px_#ced9e3] box-border w-[980px] h-[626px] border-[3px] border-solid border-lightgray" />
        <img
          className="absolute top-[39px] left-[17px] w-[61px] h-[61px] object-cover"
          alt=""
          src="/circled-play@2x.png"
        />
        <div className="absolute top-[55px] left-[94px] leading-[30px] inline-block w-[119px] h-[26px]">
          /ˈæp.əl/
        </div>
        <div className="absolute top-[174px] left-[30px] text-[inherit] leading-[30px] font-inherit inline-block w-[919px] h-[216px]">
          <ul className="m-0 pl-[27px]">
            <li className="mb-0">
              A common, round fruit produced by the tree Malus domestica,
              cultivated in temperate climates.
            </li>
            <li>
              Any of various tree-borne fruits or vegetables especially
              considered as resembling an apple; also (with qualifying words)
              used to form the names of other specific fruits such as custard
              apple, rose apple, thorn apple etc.
            </li>
          </ul>
        </div>
        <div className="absolute top-[126px] left-[31px] rounded-8xs bg-black w-[93px] h-[33px] overflow-hidden text-center text-white">
          <div className="absolute top-[1px] left-[13px] leading-[30px] font-medium inline-block w-[67px]">
            noun
          </div>
        </div>
        <div className="absolute top-[126px] left-[137px] rounded-8xs bg-gainsboro w-[93px] h-[33px] overflow-hidden text-center">
          <div className="absolute top-[1px] left-[13px] leading-[30px] font-medium inline-block w-[67px]">
            verb
          </div>
        </div>
      </div>
      <Nav
        imageAltText="/nighmode1.svg"
        searchResultText="Search"
        componentName="Dictionary"
        showNighmodeIcon={false}
        showRectangleDiv={false}
        showDiv={false}
        divVisible={false}
        divVisible1={false}
        divVisible2={false}
        divVisible3={false}
        showActive={false}
        showVectorIcon={false}
        showHovered={false}
        navPosition="absolute"
        navTop="0px"
        navLeft="100px"
        logoWidth="0px"
        logoHeight="0px"
        divTop="unset"
        divLeft="unset"
        divColor="rgba(46, 64, 81, 0.6)"
        statesHeight="0px"
        statesWidth="0px"
        statesRight="unset"
        statesBottom="unset"
        activeHeight="10px"
        activeWidth="112px"
        activeTop="unset"
        activeRight="unset"
        activeBottom="unset"
        activeLeft="unset"
      />
      <img
        className="absolute top-[11px] left-[191px] w-[63px] h-[63px] object-cover"
        alt=""
        src="/group-6-2-1@2x.png"
      />
      <div className="absolute top-[29px] left-[268px] text-3xl font-medium flex items-center w-[242px]">
        Suvaye Dictionary
      </div>
      <div className="absolute top-[123px] left-[223px] rounded-[20px] bg-whitesmoke box-border w-[1003px] h-[68px] border-[1px] border-solid border-lightgray" />
      <img
        className="absolute top-[143px] left-[240px] w-7 h-7 object-cover"
        alt=""
        src="/search@2x.png"
      />
      <input className="absolute top-[123px] left-[286px] text-lg flex items-center w-[904px] h-[68px] bg-transparent outline-none" 
        onKeyDown={handleSearch}
      />
    </div>
  );
};

export default FrontendInternTask;
