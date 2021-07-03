import { Button } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';
import Logo from './img/favicon-32x32.png';

function Header() {
    return (
        <HeaderContainer>

            <HeaderLeft>
                <a href="#"><img src={Logo} alt="" />tanui</a>
            </HeaderLeft>

            <NavSection>
                <ul>
                    <li> <a href="#">About</a></li>
                    <li> <a href="#">Stack</a></li>
                    <li> <a href="#">Projects</a></li>
                </ul>
            </NavSection>

            <HeaderRight>
                <Button variant="contained" color="primary">
                    Contact Me
                </Button>
            </HeaderRight>

        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled.div`
    height: 5rem;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 3.5rem;
    padding-right: 3.5rem;
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
    
    > Button {
        font-size: 1rem;
    }

`;
