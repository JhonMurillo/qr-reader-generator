import React, { Suspense } from 'react';
import './App.css';
import { Router } from '@reach/router';

import { Generator } from '../src/pages/Generator';
import { Reader } from '../src/pages/Reader';

import { Header } from '../src/components/Header';

export const App = () => {
  return (
    <Suspense fallback={<div />}>
      <Header />
      <Router>
        <Generator path="/" />
        <Generator path="/generar" />
        <Reader path="/leer" />
      </Router>
    </Suspense>
  );
};
