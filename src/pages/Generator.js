import React from 'react';
import QRGenerator from '../components/QRGenerator';
import { MetaHead } from '../components/MetaHead';

export const Generator = (props) => {
  return (
    <MetaHead
      title="Generar QR"
      subTitle="Aqui puedes generar tu QR solo pasando el enlace."
      ogTitle="Generar QR!"
      ogUrl="https://qr-lector-generador.herokuapp.com/generar"
      ogImage="https://www.google.com.co/url?sa=i&url=https%3A%2F%2Fwww.qrcode-monkey.com%2Fes&psig=AOvVaw2kqXYd4g6xaLRQue1nXfBK&ust=1590349991732000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCm1M7hyukCFQAAAAAdAAAAABAD"
    >
      <QRGenerator />
    </MetaHead>
  );
};
