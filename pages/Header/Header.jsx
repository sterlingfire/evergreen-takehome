import React from 'react';

import {Navbar} from 'react-bootstrap'

const Header = () => (
 <header>
    <Navbar style={{padding:0,
                    marginBottom: "5px",
                    borderRadius: "5px",
                    filter: "drop-shadow(0px 5px 3px #ccc)"}} bg="light">
      <Navbar.Brand href="/">
        <img
          src="/logo.png"
          className='img'
          alt="Skyscanner logo"
          style={{margin:0}}
          width={150}
          height={50}
        />
        </Navbar.Brand>
    </Navbar>
  </header>
);

export default Header;
