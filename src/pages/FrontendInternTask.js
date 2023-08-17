import Nav from "../components/Nav";
import { useState } from "react";
import DisplayBlock from "../components/displayBlock";
import axios from 'axios';

const FrontendInternTask = () => {
  const [data,setData]=useState([]);
  const handleSearch=async(e)=>{
     const search=e.target.value;
     try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`);
      setData(response.data[0]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
     
  }

  return (
    
    <div>
      <DisplayBlock data={data} />
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
        onKeyDown={(e) => {
          if (e.key === "Enter"){
            handleSearch(e);
          }
        }}
      />
    </div>
  );
};

export default FrontendInternTask;
