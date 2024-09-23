import { useEffect, useState } from 'react';

function InputContainer () {
  const [debutDate, setDebutDate] = useState('');
  const [finDate, setFinDate] = useState('');
  const defaultDate = new Date();

  useEffect(() => {
    setDebutDate(defaultDate.toISOString().substr(0, 10));
    const defaultFindDate = new Date();
    defaultFindDate.setDate(defaultDate.getDate() + 1);
    setFinDate(defaultFindDate.toISOString().substr(0, 10));
  }, []);

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
          <input type="checkbox" name="checkbox" value="1" /> Agregat 
        </label>
        <label className="mr-2">
          <input type="checkbox" name="checkbox" value="2" /> Tresorerie 
        </label>
        <label className="mr-2">
          <input type="checkbox" name="checkbox" value="3" /> Immobilisations 
        </label>
        <label className="mr-2">
          <input type="checkbox" name="checkbox" value="4" /> Obligations 
        </label>
      </div>
      <div className='mb-2 space-x-0'>
        De: <input type="date" className="w-50 mr-2 p-2 border border-gray-300 rounded" defaultValue={debutDate} />
        A: <input type="date" className="w-50 mr-2 p-2 border border-gray-300 rounded" defaultValue={finDate} />
      </div>
    </div>
  );
};

export default InputContainer;