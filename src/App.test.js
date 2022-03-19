import { render, screen } from '@testing-library/react';
import App from './App';
import Options from "../components/Options";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom"
import Manager from "./manager/Manager";
import Customer from "./Customer";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
