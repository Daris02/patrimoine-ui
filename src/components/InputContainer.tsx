import { useEffect, useState } from "react";

function InputContainer({
  onInputChange,
}: {
  onInputChange: (newImageSrc: string, newLogs: string[]) => void;
}) {
  const [debutDate, setDebutDate] = useState("");
  const [finDate, setFinDate] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const defaultDate = new Date();

  useEffect(() => {
    setDebutDate(defaultDate.toISOString().substr(0, 10));
    const defaultFinDate = new Date();
    defaultFinDate.setDate(defaultDate.getDate() + 1);
    setFinDate(defaultFinDate.toISOString().substr(0, 10));
  }, []);

  useEffect(() => {
    const images = [
      "/assets/img-1.png",
      "/assets/img-2.png",
      "/assets/img-3.png",
      "/assets/img-4.png",
      "/assets/img-5.png",
      "/assets/img-6.png",
      "/assets/img-7.png",
    ];

    let newImageSrc;
    const newLogs = [];

    if (!selectedOption) {
      newImageSrc = "/assets/default.png";
      newLogs.push(`Possesseur sélectionnée: ${selectedOption || 'Aucun'}`);
    } else if (selectedOption || debutDate || finDate) {
      newImageSrc = images[Math.floor(Math.random() * images.length)];
      newLogs.push(`Possesseur sélectionnée: ${selectedOption || 'Aucun'}`);
    } else {
      newImageSrc = "/assets/default.png";
    }

    if (debutDate && finDate) {
      newLogs.push(`Date de début du projection : ${debutDate}`);
      newLogs.push(`Date de fin du projection : ${finDate}`);
    }

    onInputChange(newImageSrc, newLogs);
  }, [debutDate, finDate, selectedOption]);

  return (
    <div className="mb-5 p-2 border border-gray-300 rounded">
      <div className="mb-2">
        Patrimoine
        <select
          className="w-80 p-2 border border-gray-300 rounded"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="">choisir un possesseur</option>
          <option value="Cresus">Cresus</option>
          <option value="Ilo">Ilo</option>
          <option value="Zety">Zety</option>
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
      <div className="mb-2 space-x-0">
        De:
        <input
          type="date"
          className="w-50 mr-2 p-2 border border-gray-300 rounded"
          value={debutDate}
          onChange={(e) => setDebutDate(e.target.value)}
        />
        A:
        <input
          type="date"
          className="w-50 mr-2 p-2 border border-gray-300 rounded"
          value={finDate}
          onChange={(e) => setFinDate(e.target.value)}
        />
      </div>
    </div>
  );
}

export default InputContainer;
