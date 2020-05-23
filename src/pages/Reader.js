import React from 'react';
import QRReader from '../components/QRReader';
import { MetaHead } from '../components/MetaHead';

export const Reader = (props) => {
  return (
    <MetaHead
      title="Leer QR"
      subTitle="Aqui puedes leer tu QR solo scaneandolo!"
      ogTitle="Leer QR!"
      ogUrl="https://qr-lector-generador.herokuapp.com/leer"
      ogImage="https://www.google.com.co/url?sa=i&url=https%3A%2F%2Fwww.amazon.es%2FQR-Code-Scanner-Barcode-Reader%2Fdp%2FB07X5T7ZWB&psig=AOvVaw11bBuDSahcz403DJbrwCzp&ust=1590350058289000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLCauOrhyukCFQAAAAAdAAAAABAD"
    >
      <QRReader />
    </MetaHead>
  );
};
