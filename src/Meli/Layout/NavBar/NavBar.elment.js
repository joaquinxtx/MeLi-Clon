import styled from 'styled-components';



export const NavContainer =styled.header`
width: 100%;
height: 100px;
background-color:var(--yellow) ;
`
export const NavWrapper=styled.nav`
max-width: 1184px;
padding: 8px 8px;
margin: 0 auto;
`

export const NavInput = styled.input`
width: 598px;
height: 39px;
::placeholder { color: #33333346; font-size:16px; padding-left:10px; }
margin-left: 52px ;
position: absolute;
top: 10px;
box-shadow: 0px 3px 5px 0px rgba(158,153,153,0.75);
-webkit-box-shadow: 0px 3px 5px 0px rgba(158,153,153,0.75);
-moz-box-shadow: 0px 3px 5px 0px rgba(158,153,153,0.75);
cursor:pointer;

`
export const NavImgDisney = styled.img`
width: 340px;
height: 44px;
margin-left: 680px;

`
export const NavContainerCategory =styled.div`
display: flex;
align-items: flex-end;
`
export const NavContainerItemCategory =styled.div`
width: 655px;
height: 36px;
display: flex;
align-items: flex-end;
justify-content: flex-start;
padding-left: 30px;

`

export const NavCategory = styled.div`
padding-right:18px ;
font-size: 14px;
text-align: left;
color:var(--text-1);

`

export const NavDirection = styled.div`
font-size: 14px;
color:var(--text-1);
cursor:pointer;

`

export const NavItemsCategory = styled.p`
font-size: 14px;
color:var(--text-1);
cursor:pointer;
margin-bottom: 0;
`