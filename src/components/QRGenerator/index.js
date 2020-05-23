import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import { InputGroup, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
const QRGenerator = ({ size = 512 }) => {
  const [value, setValue] = useState('');

  return (
    <>
      <Container style={{ marginTop: '250px' }}>
        <Row>
          <Col>
            <InputGroup>
              <Input
                placeholder="Link"
                onChange={(e) => setValue(e.target.value)}
              />
            </InputGroup>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <QRCode
              value={value}
              size={size}
              fgColor="#4e2318"
              renderAs="svg"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default QRGenerator;
