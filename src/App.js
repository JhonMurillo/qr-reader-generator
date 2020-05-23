import React from 'react';
import './App.css';
import { Router } from '@reach/router';

import { Generator } from '../src/pages/Generator';
import { Reader } from '../src/pages/Reader';

import { Header } from '../src/components/Header';

export const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Generator path="/" />
        <Generator path="/generar" />
        <Reader path="/leer" />
      </Router>
    </>
  );
};
