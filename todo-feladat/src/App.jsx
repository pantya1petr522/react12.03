import React, { useState } from 'react';

const FeladatLista = () => {
  const [feladatok, setFeladatok] = useState([]);
  const [ujFeladatSzoveg, setUjFeladatSzoveg] = useState('');

 
  const ujFeladatHozzaadasa = () => {
    if (ujFeladatSzoveg.trim() === '') return;
    const ujFeladat = { szoveg: ujFeladatSzoveg, kesz: false };
    setFeladatok([...feladatok, ujFeladat]);
    setUjFeladatSzoveg(''); 
  };


  const feladatTorlese = (index) => {
    const ujLista = feladatok.filter((_, i) => i !== index);
    setFeladatok(ujLista);
  };

  const allapotValtoztatasa = (index) => {
    const ujLista = feladatok.map((feladat, i) => {
      if (i === index) {
        return { ...feladat, kesz: !feladat.kesz };
      }
      return feladat;
    });
    setFeladatok(ujLista);
  };

  return (
    <div className='bg-pink-200 border-2 border-black'>
      <h1 className='text-3xl underline text-center m-8'>Adj hozzá valamit!</h1>
      <input
      className='bg-white-500 hover:bg-700 text-black font-bold py-2 px-4 rounded m-8 text-center '
        type="text"
        value={ujFeladatSzoveg}
        onChange={(e) => setUjFeladatSzoveg(e.target.value)}
        placeholder="Ide írd az új szöveget!"
      />
      <button onClick={ujFeladatHozzaadasa} className='bg-white-500 hover:bg-pink-700 text-black font-bold py-2 px-4 rounded '>Hozzáadás</button>
      <ul>
        {feladatok.map((feladat, index) => (
          <li key={index} style={{ textDecoration: feladat.kesz ? 'line-through' : 'none' }}>
            <input className='m-4'
              type="checkbox"
              checked={feladat.kesz}
              onChange={() => allapotValtoztatasa(index)}
            />
            {feladat.szoveg}
            <button onClick={() => feladatTorlese(index)} className='bg-white-500 hover:bg-pink-700 text-black font-bold py-2 px-4 rounded m-4'>Törlés</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeladatLista;
