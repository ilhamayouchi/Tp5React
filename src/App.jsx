import { useState } from 'react';
import { UtilisateurContext } from './UtilisateurContext';
import FormulaireControle from './FormulaireControle';
import FormulaireNonControle from './FormulaireNonControle';
import TemperatureConvertor from './TemperatureConvertor';
import Profil from './Profil';
import './App.css';

function App() {
  const [utilisateur, setUtilisateur] = useState({
    nom: 'ilhame Ayouchi',
    connecte: true
  });

  return (
    <UtilisateurContext.Provider value={{ utilisateur, setUtilisateur }}>
      <div className="page">
        <h1>TP React débutant</h1>

        <section className="panneau">
          <h2>Formulaire Contrôlé</h2>
          <FormulaireControle />
        </section>

        <section className="panneau">
          <h2>Formulaire Non-Contrôlé</h2>
          <FormulaireNonControle />
        </section>

        <section className="panneau">
          <h2>Lifting State Up</h2>
          <TemperatureConvertor />
        </section>

        <section className="panneau">
          <h2>Profil Utilisateur</h2>
          <Profil />
        </section>
      </div>
    </UtilisateurContext.Provider>
  );
}

export default App;
