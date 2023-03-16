import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import ReactDOM from 'react-dom';
import App from './App';

Enzyme.configure({ adapter: new Adapter()});

describe("App.js Test", ()=> {
  test("App.js renders without crashing", ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  })
})