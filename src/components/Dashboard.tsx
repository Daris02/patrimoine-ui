import { useState } from 'react';
import ImageContainer from './ImageContainer';
import InputContainer from './InputContainer';
import LogContainer from './LogContainer';

function Dashboard () {
  const [imageSrc, setImageSrc] = useState('/assets/img-1.png');
  const [logs, setLogs] = useState([]);

  const handleInputChange = (newImageSrc: string, newLogs: string[]) => {
    setImageSrc(newImageSrc);
    setLogs([...logs, ...newLogs]);
  };

  return (
    <div className="w-full flex">
      <div className="flex flex-col w-full ml-2">
        <InputContainer onInputChange={handleInputChange} />
        <LogContainer logs={logs}/>
      </div>
      <div className="flex flex-col w-full ml-2">
        <ImageContainer imageSrc={imageSrc}/>
      </div>
    </div>
  );
};

export default Dashboard;