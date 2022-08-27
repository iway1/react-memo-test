import logo from './logo.svg';
import './App.css';
import { memo, useState } from 'react';
import React from 'react';

const settings = {
  REACT_APP_N_COMPONENTS: 5000,
  REACT_APP_N_STATES: 10

}

function NestedComponent() {
  return (
    <div></div>
  )
}
var firstNonMemoComponentRender = 0;
var firstMemoComponentRender = 0;
var nonMemoMemoryFirstRender = 0;
var memoMemoryFirstRender = 0;


function createComponent() {

  return ({index}) => {
    if(index == 0) {
      firstNonMemoComponentRender = performance.now();
      nonMemoMemoryFirstRender = window.performance.memory.usedJSHeapSize;
    }
    if(index == settings.REACT_APP_N_COMPONENTS - 1) {
      console.log(`Rendering non memo components took: ${performance.now() - firstNonMemoComponentRender}ms`)
      console.log(`And ${window.performance.memory.usedJSHeapSize - nonMemoMemoryFirstRender} bytes`)
    }
    const states = [];
    for (var i = 0; i < process.env.REACT_APP_N_STATES; i++) {
      const state = useState();
      states.push(state)
    }
    return (
      <>
        <div>
          A component
        </div>
        <NestedComponent />
      </>
    )
  }
}

function createMemoComponent() {
  return memo(({index}) => {
    if(index == 0) {
      firstMemoComponentRender = performance.now();
      memoMemoryFirstRender = window.performance.memory.usedJSHeapSize;
    }
    if(index === settings.REACT_APP_N_COMPONENTS - 1) {
      console.log(`Rendering memo components took: ${performance.now() - firstMemoComponentRender}ms`);
      console.log(`And ${window.performance.memory.usedJSHeapSize - memoMemoryFirstRender} bytes`)
    }
    const states = [];
    for (var i = 0; i < settings.REACT_APP_N_STATES; i++) {
      const state = useState();
      states.push(state)
    }
    return (
      <>
        <div>
          A component
        </div>
        <NestedComponent />
      </>
    )
  }, (oldProps, newProps)=>true)
}
console.log(`Running with settings:`)
console.log(`Number of components: ${settings.REACT_APP_N_COMPONENTS}`)
console.log(`Number of useState calls per component: ${settings.REACT_APP_N_STATES}`)

console.log(`Creating components (no memo).`)
const memoryUsageBeforeNoMemoDefinition = window.performance.memory.usedJSHeapSize;
const startNoMemo = performance.now();
var noMemoComponents = []
for (var i = 0; i < parseInt(settings.REACT_APP_N_COMPONENTS); i++) {
  noMemoComponents.push(createComponent());
}
console.log(`Creating no memo components took ${performance.now() - startNoMemo}ms`)
console.log(`And cost ${window.performance.memory.usedJSHeapSize - memoryUsageBeforeNoMemoDefinition} bytes`)

const startMemo = performance.now();
var memoComponents = [];

console.log("Creating components (memo)")

const memoryUsageBeforeMemoDefinition = window.performance.memory.usedJSHeapSize;

for (var i = 0; i < settings.REACT_APP_N_COMPONENTS; i++) {
  memoComponents.push(createMemoComponent())

}

console.log(`Creating memo components took: ${performance.now() - startMemo}ms`)
console.log(`And cost ${window.performance.memory.usedJSHeapSize - memoryUsageBeforeMemoDefinition} bytes`)

function App() {
  return (
    <div className="App">
     {noMemoComponents.map((C, i)=>(<C index={i}/>))}
     {memoComponents.map((C, i)=>(<C index={i}/>))}
    </div>
  );
}

export default App;
