import { CSSProperties } from 'react';
import { NavLink } from 'react-router-dom';
import { INavProps } from '../../models/props/Nav';

const contStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
};

const linkStyle: CSSProperties = {
    margin: '8px',
    textDecoration: 'none',
    color: 'blue',
};

const Nav = (props: INavProps) => {
    return (
        <div style={contStyle}>
            {props.navigation.map((navItem, index) => (
                <NavLink style={linkStyle} to={navItem.to} key={index}>
                    {navItem.text}
                </NavLink>
            ))}
        </div>
    );
};

export default Nav;
