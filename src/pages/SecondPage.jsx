
import React from 'react';
import { useDataContext } from '../components/DataContext';
import DisplayBlock from '../components/displayBlock';

const SecondPage = () => {

  const { displayBlockData } = useDataContext();


  return (
    <div>
      
      <DisplayBlock data={displayBlockData} />
      <div className="absolute top-[136px] left-[239px] text-[30px] leading-[30px] font-medium inline-block w-[713px] font-vazirmatn text-black">
        Word: {displayBlockData.word}
      </div>
    </div>

  );
};

export default SecondPage;
