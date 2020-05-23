import React, { useState } from 'react';
import QrReader from 'react-qr-reader';
import { Container, Row, Col } from 'reactstrap';
import { Spinner, Button } from 'reactstrap';

const QRReader = ({ delay = 250 }) => {
  const [result, setResult] = useState('');
  const [camera, setCamera] = useState('');
  const [scanning, setScanning] = useState(false);
  const [showReader, setShowReader] = useState(false);

  const handleScan = (data) => {
    console.log('Scanning...');
    if (data) {
      console.log('Finish Scanning!');
      setResult(data);
      setScanning(false);
      setShowReader(false);
    }
  };

  const handleLoad = (object) => {
    setScanning(true);
    setCamera(object ? object.streamLabel : '');
  };

  const handleError = (err) => {
    console.error(err);
    setScanning(false);
  };

  return (
    <>
      <Container style={{ marginTop: '250px' }}>
        <Row>
          <Col xs="6" style={{ textAlign: 'center' }}>
            <Button
              disabled={showReader}
              onClick={() => {
                setShowReader(true);
                setScanning(true);
                setResult('');
              }}
              color="primary"
            >
              Scanear
            </Button>
          </Col>
          <Col xs="6" style={{ textAlign: 'center' }}>
            <Button
              disabled={!showReader}
              onClick={() => {
                setShowReader(false);
                setScanning(false);
                setResult('');
              }}
              color="danger"
            >
              Cancelar
            </Button>
          </Col>

          <Col
            sm="12"
            md={{ size: 6, offset: 3 }}
            style={{ marginTop: '25px' }}
          >
            {showReader && (
              <>
                <QrReader
                  delay={delay}
                  legacyMode={false}
                  facingMode="user"
                  onError={handleError}
                  onScan={handleScan}
                  onLoad={handleLoad}
                />
                <p>{camera}</p>
              </>
            )}
            {scanning && <Spinner color="dark" />}
          </Col>
        </Row>

        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <p>{result}</p>
            <a href={result} target='blank'>{result}</a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default QRReader;
