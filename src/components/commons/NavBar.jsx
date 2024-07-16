
import {Menu} from 'semantic-ui-react'
import icon from './assets/finalLogo.png'

const NavBar = () => {
    return(
        <Menu borderless fixed='top'>
            <Menu.Item>
                <img src={icon} alt = "icon" style={{width: 190, height: 50}}/>
            </Menu.Item>
            <Menu.Item name='Home'/>
            <Menu.Item name='Recipes'/>
        </Menu>
    )
}

export default NavBar;