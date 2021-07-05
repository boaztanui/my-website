import { Button } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';
import Logo from './img/favicon-32x32.png';

function Header() {
    return (
        <HeaderContainer>

            <HeaderLeft>
                <a href="#"><img src={Logo} alt="" /> <span>tanui </span> </a>
            </HeaderLeft>

            <NavSection>
                <ul>
                    <li> <a href={"#about"}>About</a></li>
                    <li> <a href={"#about"}>Stack</a></li>
                    <li> <a href={"#projects"}>Projects</a></li>
                </ul>
            </NavSection>

            <HeaderRight>
                <a href={'#contact'}><Button variant="contained" color="primary">Contact Me</Button> </a>
            </HeaderRight>

        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled.div`

    position: sticky;
    top: 0;
    height: 5rem;
    width: 100%;
    z-index: 1000;
    background-color: #fff;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 3.5rem;
    padding-right: 3.5rem;

    @media only screen and (max-width: 26.185em) {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
         }
   
    
`;

const HeaderLeft = styled.div`
    
    > a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #000;
    }

    > a > img {
        height: 2rem;
        margin-right: 0.4rem;
    }

    a > span {
        @media only screen and (max-width: 27.5625em) {
           display: none;
         }
   
    }
`;

const NavSection = styled.div`
    > ul {
        display: flex;
        justify-content: space-between;
    }

    > ul > li {
        list-style: none;

    }

    ul > li:not(:last-child) {
        margin-right: 2rem;
    }

    > ul > li > a {
        text-decoration: none;
        color: #000;

       
    }

    > ul > li :hover {
            opacity: .9;
        }
    
`;

const HeaderRight = styled.div`
    > a {
        text-decoration: none;
    }
    a > Button {
        font-size: 1rem; }
`;
