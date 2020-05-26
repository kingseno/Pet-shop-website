import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <div>
    <Menu mode={props.mode}>
      <Menu.Item key="mail">
        <a href="/">Home</a>
      </Menu.Item>
      {/* <SubMenu title={<span>Home</span>}>
      </SubMenu> */}
      <SubMenu title={<span>Catalog</span>}>
          <Menu.Item key="Pet">
            <a href="/product/pet">Pet</a>
          </Menu.Item>
          <Menu.Item key="PetFood">
            <a href="/product/pet-food">Pet food</a>
          </Menu.Item>
          <Menu.Item key="Accessories">
            <a href="/product/accessories">Accessories</a>
          </Menu.Item>
          <Menu.Item key="BookingService">
            <a href="/booking-service">Booking service</a>
          </Menu.Item>
      </SubMenu>
      {/* <SubMenu title={<span>Blogs</span>}> 
        <MenuItemGroup title="Pet care"  mode="vertical">
          <Menu.Item key="Dog">Dog</Menu.Item>
          <Menu.Item key="Cat">Cat</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="Health"  mode="vertical">
          <Menu.Item key="Puppy">Puppy</Menu.Item>
          <Menu.Item key="Mature pet">Mature pet</Menu.Item>
        </MenuItemGroup>
      </SubMenu> */}
      <SubMenu title={<span>Blogs</span>}> 
        <SubMenu key="PetCare" title="Pet care">
          <Menu.Item key="Dog">Dog</Menu.Item>
          <Menu.Item key="Cat">Cat</Menu.Item>
        </SubMenu>
        <SubMenu key="Health" title="Health">
          <Menu.Item key="Puppy">Puppy</Menu.Item>
          <Menu.Item key="Mature pet">Mature pet</Menu.Item>
        </SubMenu>
      </SubMenu>
    </Menu>
    </div>
  )
}

export default LeftMenu