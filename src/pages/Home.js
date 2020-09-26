import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import { View } from 'react';
import { downloadInfoFile, PEOPLE_ENDPOINT } from '../api/People'
import { BASE_API_URL } from '../api/Client';
function Home() {
  const [date, setDate] = useState({month: 9, year: 2020})
  return (
    <div>
      <h1 align="center">Welcome to <font style={{ color: '#26B020' }}>Pan-Lang</font>!</h1>
      <br></br>
      <div>
        <Link to="/order" style={{ color: 'white' }}>
          <Button variant="success" size="lg" block>New Order
      </Button>
        </Link>
      </div>
      <br></br>
      <br></br>
      <Link to="/stock" style={{ color: 'white' }}>
        <Button variant="success" size="lg" block>Edit Stock</Button>{' '}
      </Link>
      {/* I think we want an anchor tag w/ href and target=_blank , 
      if we use axios we have to hack around downloading the content for the user*/}
      <a href={`${BASE_API_URL}${PEOPLE_ENDPOINT}?${new URLSearchParams(date)}`}>      
      <Button variant="success" size="lg" block>Download</Button>{' '}
      </a>
    </div>
  );
}

export default Home;
