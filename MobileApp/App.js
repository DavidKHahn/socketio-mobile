console.ignoredYellowBox = ['Remote debugger'];
import React from 'react';
import { YellowBox } from 'react-native';
import HomeScreen from './screens/HomeScreen';
YellowBox.ignoreWarnings([
    'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
]);

export default function App() {
  return (
      <HomeScreen />
  );
}
