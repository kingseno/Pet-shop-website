import React, { useState } from 'react';
import LeftMenu from './Sections/LeftMenu';
import RightMenu from './Sections/RightMenu';
import { Drawer, Button, Icon, Row, Col } from 'antd';
import './Sections/Navbar.css';
import SuggestionSearch from '../SuggestionSearch/SuggestionSearch';

function NavBar() {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  };

  const onClose = () => {
    setVisible(false)
  };

  return (
    <nav className="menu" style={{ position: 'relative', zIndex: 5, width: '100%', height: '80px'}}>
      <div className="menu__logo">
        <a href="/"><img width="150px"
                         height="68px"
                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6aRu9-S3WOwrzKFJt0SEWmVTFHI3qyJbm-G25EePX3nYL_6ke&usqp=CAU" /></a>
      </div>
      <div className="menu__container">
        <div className="menu_left" id="fuckCss">
          <LeftMenu mode="horizontal" />
        </div>
        <div className="menu_left">
          <SuggestionSearch />
        </div> 
        <div className="menu_right">
          <RightMenu mode="horizontal" />
        </div>
        <Button
          className="menu__mobile-button"
          type="primary"
          onClick={showDrawer}
        >
          <Icon type="align-right" />
        </Button>
        <Drawer
          title="MENU"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu mode="inline" />
          <RightMenu mode="inline" />
        </Drawer>
      </div>
    </nav>
  )
}

export default NavBar