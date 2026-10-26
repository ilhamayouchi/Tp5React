import { useState } from 'react';
import TemperatureInput from './TemperatureInput';

function TemperatureConvertor() {
  const [celsius, setCelsius] = useState('');

  const fahrenheit =
    celsius === '' ? '' : String(Math.round((parseFloat(celsius) * 9 / 5 + 32) * 100) / 100);

  const changerFahrenheit = (valeur) => {
    if (valeur === '') {
      setCelsius('');
    } else {
      setCelsius(String(Math.round(((parseFloat(valeur) - 32) * 5 / 9) * 100) / 100));
    }
  };

  return (
    <div>
      <TemperatureInput
        temperature={celsius}
        onTemperatureChange={setCelsius}
        placeholder="Température °C"
      />
      <TemperatureInput
        temperature={fahrenheit}
        onTemperatureChange={changerFahrenheit}
        placeholder="Température °F"
      />
      <p>
        {celsius
          ? `Température saisie : ${celsius} °C = ${fahrenheit} °F`
          : 'Aucune température saisie'}
      </p>
    </div>
  );
}

export default TemperatureConvertor;