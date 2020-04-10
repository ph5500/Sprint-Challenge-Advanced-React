import React from 'react';
import ReactDOM from 'react-dom';
import "@testing-library/jest-dom/extend-expect";
import { render } from '@testing-library/react';
import App from './App';
import Players from './components/Players/players';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("elements are rendered", () => {
  const { getByTestId } = render(<App />)

  getByTestId("header");
  getByTestId("player-list");

})

test("text is rendered", () => {
  const { getByText } = render(<App />)

  getByText("Toggle DarkMode");
})

// test("card is rendered", () => {
//   const { getByTestId } = render(<Players />)

//   getByTestId("player-card");

// }) 