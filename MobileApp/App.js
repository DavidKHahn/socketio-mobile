import React from 'react';
import { YellowBox } from 'react-native';
import AppContainer from './AppContainer';
console.ignoredYellowBox = ['Remote debugger'];
console.disableYellowBox = true
YellowBox.ignoreWarnings([
    'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
]);

export default function App() {
  return (
      <AppContainer />
  );
}
