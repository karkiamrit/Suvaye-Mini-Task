import React from 'react';
import Share from "../components/Share";
import axios from 'axios';
const displayBlock = (props) => {
  
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
      </div>
  )
}

export default displayBlock;
