import React from 'react';
import Share from "../components/Share";
import { useState } from 'react';
const displayBlock = (props) => {
    const [type, setType] = useState('noun');
    const [status, setStatus] = useState('play');
    const [audioElements, setAudioElements] = useState([]);
    const handleClick = (e) => {
        setType(e.target.value);
    }
    const handleAudioToggle = () => {
        if (status === 'play') {
            setStatus('pause');
            const audioElements = [];
    
            if (props.data.phonetics && props.data.phonetics.length > 0) {
                props.data.phonetics.forEach(phonetic => {
                    const audio = new Audio(phonetic.audio);
                    audio.play().catch(error => {
                        console.error('Error playing audio:', error);
                    });
    
                    // Listen for the 'ended' event to change the image back
                    audio.addEventListener('ended', () => {
                        setStatus('play');
                    });
    
                    audioElements.push(audio);
                });
            }
    
            setAudioElements(audioElements);
        } else {
            setStatus('play');
            if (audioElements) {
                audioElements.forEach(audio => audio.pause());
            }
        }
    };
    
    return (
        <div className="relative bg-white w-full h-[1511px] overflow-hidden text-left text-xl text-black font-vazirmatn">
            <Share />
            <div className="absolute top-[214px] left-[230px] w-[980px] h-[626px] font-text-xl-regular">
                <div className="absolute top-[3px] left-[-1px] rounded-16xl bg-white shadow-[0px_2px_0px_#ced9e3] box-border w-[980px] h-[626px] border-[3px] border-solid border-lightgray" />
                {props.data.word && <img
                    className="absolute top-[39px] left-[17px] w-[61px] h-[61px] object-cover cursor-pointer"
                    alt=""
                    src={status === 'play' ? "/circled-play@2x.png" : "/pause-button@2x.png"}
                    onClick={handleAudioToggle}
                />}
                <div className="absolute top-[55px] left-[94px] leading-[30px] inline-block w-[119px] h-[26px]">
                    {props.data.phonetic}
                </div>
                <div className="absolute top-[174px] left-[30px] text-[inherit] leading-[30px] font-inherit inline-block w-[919px] h-[216px]">
                    <ul className={`m-0 pl-[27px] ${type===null ? "list-none":"list-decimal"}`} >
                        {Array.isArray(props.data.meanings) ? (
                            props.data.meanings.map((meaning, meaningIndex) => (
                                <div key={meaningIndex} className="mb-4">
                                    {Array.isArray(meaning.definitions) && meaning.partOfSpeech === type && (
                                        meaning.definitions.slice(0,2).map((definition, definitionIndex) => (
                                            <li key={definitionIndex}>{definition.definition}</li>
                                        ))
                                    )}
                                </div>
                            ))
                        ) : null}
                    </ul>
                </div>
                {props.data.word && <div className="absolute top-[126px] left-[31px] bg-gainsboro rounded-8xs w-[93px] h-[33px] overflow-hidden text-center">
                    <button
                        className={`w-full h-full focus:outline-none font-medium text-xl ${type === "noun" ? "bg-black text-white" : "bg-transparent"
                            }`}
                        value="noun"
                        onClick={handleClick}
                    >
                        noun
                    </button>
                </div>}
                
                {props.data.word && <div className="absolute top-[126px] left-[137px] bg-gainsboro rounded-8xs w-[93px] h-[33px] overflow-hidden text-center">
                    <button
                        className={`w-full h-full focus:outline-none font-medium text-xl ${type === "verb" ? "bg-black text-white" : "bg-transparent"
                            }`}
                        value="verb"
                        onClick={handleClick}
                    >
                        verb
                    </button>
                </div>}
            </div>
        </div>
    )
}

export default displayBlock;
