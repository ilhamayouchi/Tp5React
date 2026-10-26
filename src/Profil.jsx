import { useContext } from 'react';
import { UtilisateurContext } from './UtilisateurContext';

function Profil() {
  const { utilisateur, setUtilisateur } = useContext(UtilisateurContext);

  const deconnexion = () => {
    setUtilisateur({ nom: '', connecte: false });
  };

  return (
    <div>
      {utilisateur.connecte ? (
        <>
          <p>Bienvenue, {utilisateur.nom}</p>
          <button onClick={deconnexion}>Se déconnecter</button>
        </>
      ) : (
        <p>Veuillez vous connecter.</p>
      )}
    </div>
  );
}

export default Profil;
