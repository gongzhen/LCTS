import React from 'react';
import * as serviceWorker from './serviceWorker';

const initState = {
  head: {
    text: 'Header',
    color: 'red'
  },
  body: {
    text: 'Body',
    color: 'green'
  }
}

// store is the state.
// action is to change the state.
// storeChange is a function (store, action)
// return nothing.
const storeChange = (store, action) => {
  switch (action.type) {
    case 'HEADER_COLOR':
      return {
        ...store, 
        head: {
          ...store.head,
          color: action.color
        }
      }
    case 'BODY_TEXT':
      return {
        ...store,
        body: {
          ...store.body,
          text: action.text
        }
      }
    default:
      return { ...store }
  }
}

// create the store for state.
// function (state, storeChange) 
// Create dispatch and function (action) return storeChange(store, action)
// return object {store, dispatch }
const createStore = (state, storeChange) => {
  let store = state || {};
  const renderStoreArrays = [];
  // subscribe is function that subcribe renderStoreArrays to listen each element.
  // function subscribe(renderAppFunc) {
  //   renderStoreArrays.push(renderAppFunc)  
  // }
  // createStore will return subscribe function.
  const subscribe = (renderAppFunc) => renderStoreArrays.push(renderAppFunc);
  // dispatch will be called outsite by passing action to dispatch.
  // store is the state for header and body.
  const dispatch = (action) => {
    // pass store(state) and action to storeChange
    // return newStore.
    console.log('dispatch:' + action);
    const newStore = storeChange(store, action);
    renderStoreArrays.forEach(renderAppFunc => {
      console.log('renderAppFunc:' + renderAppFunc);
      // item is renderAppFunc: (store, oldStore) => renderAppFunc(store, oldStore).
      // which is a function(store, oldStore) {
      //    renderAppFunc(store, oldStore)
      // }
      // renderAppFunc will take newStore and store.
      // it will call renderApp(newStore, store;
      renderAppFunc(newStore, store);
    });
    store = newStore;
  }
  return { store, dispatch, subscribe };
}

const { store, dispatch, subscribe } = createStore(initState, storeChange);

function renderHead (state){
  console.log('renderHead');
  const head = document.getElementById('head');
  head.innerText = state.text;
  head.style.color = state.color;
}
function renderBody (state){
  console.log('renderBody');
  const body = document.getElementById('body')
  body.innerText = state.text;
  body.style.color = state.color;
}

function renderApp (store, oldStore = {}){
  if (store === oldStore) {
    return;
  }
  store.head !== oldStore.head && renderHead(store.head);
  store.body !== oldStore.body && renderBody(store.body);
  console.log('render app', store, oldStore);
}
// renderApp(store);

// renderApp(store);

// subscribe just push (store, oldStore) => renderApp(store, oldStore) to 
// renderStoreArrays.
subscribe((store, oldStore) => renderApp(store, oldStore));
console.log('subcribe:' + subscribe);
// subcribe:renderAppFunc => renderStoreArrays.push(renderAppFunc)
renderApp(store);
dispatch({type: 'BODY_TEXT', text: 'dispatch update body'});
// dispatch({type: 'HEADER_COLOR', color: 'blue'});
// dispatch({type: 'BODY_TEXT', text: 'dispatch update body 2'});
// dispatch({type: 'HEADER_COLOR', color: 'green'});
// dispatch({type: 'HEADER_COLOR', color: 'yellow'});
// dispatch({type: 'HEADER_COLOR', color: 'black'});

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
