import React from 'react';
import { YellowBox } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
import AppContainer from './AppContainer';
const socket = io("http://192.168.1.3:3001")
const socketIoMiddleware = createSocketIoMiddleware(socket, "server/");
// client receives message into the reducer of action type message
// adds message data into state
function reducer(state = {}, action) {
  switch(action.type) {
    case 'message':
      return {...state, message: action.data};
      default:
        return state;
  }
}

const store = applyMiddleware(socketIoMiddleware)(createStore)(reducer);

store.subscribe(() => {
  console.log("new state", store.getState());
});
store.dispatch({type: "server/hello", data: "Hello!" });

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
