import ImageContainer from './ImageContainer';
import InputContainer from './InputContainer';
import LogContainer from './LogContainer';

function Dashboard () {
  return (
    <div className="w-full flex">
      <div className="flex flex-col w-full ml-2">
        <InputContainer />
        <LogContainer />
      </div>
      <div className="flex flex-col w-full ml-2">
        <ImageContainer />
      </div>
    </div>
  );
};

export default Dashboard;