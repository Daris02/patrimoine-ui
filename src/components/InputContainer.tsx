import { useState } from 'react';

function InputContainer () {
  const [debutDate, SetDebutDate] = useState();
  const [finDate, SetFinDate] = useState();

  return (
    <div className="mb-5 p-2 border border-gray-300 rounded">
      <div className='mb-2'>
        Patrimoine <select className="w-80 p-2 border border-gray-300 rounded">
          <option value="">Cresus</option>
          <option value="1">Ilo</option>
          <option value="2">Zety</option>
        </select>
      </div>
      <div className="mb-2">
        <label className="mr-2">
          <input type="radio" name="radio" value="1" /> Agregat 
        </label>
        <label className="mr-2">
          <input type="radio" name="radio" value="2" /> Tresorerie 
        </label>
        <label className="mr-2">
          <input type="radio" name="radio" value="3" /> Immobilisations 
        </label>
        <label className="mr-2">
          <input type="radio" name="radio" value="4" /> Obligations 
        </label>
      </div>
      <div className='mb-2 space-x-0'>
        De: <input type="date" className="w-50 mr-2 p-2 border border-gray-300 rounded" value={debutDate} />
        A: <input type="date" className="w-50 mr-2 p-2 border border-gray-300 rounded" value={finDate}/>
      </div>
    </div>
  );
};

export default InputContainer;