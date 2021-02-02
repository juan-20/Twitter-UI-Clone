import styled, {css} from "styled-components";
import { ArrowLeft, Home, Search, Notifications, Email } from "../../styles/Icon";


export const Container = styled.div`
    display: flex;
    flex-direction: column;

    /* ele fica sempre do tmanho até 601px: */
    /* é como uma competição entre o 601 e o 100% */
    /* o menor fica com o valor no fim */
    width: min(601px , 100%);

/* cria a faixa do lado direito:*/
    @media (min-width: 500px){
        border-right: 1px solid var(--outline);
        border-left:  1px solid var(--outline)
    }
`;

export const Header = styled.div`
z-index: 2;
position: sticky;
top: 0;
background: var(--primary);

display: flex;
align-items: center;

text-align: left;
padding: 8px 0 9px 13px;
border-bottom: 1px solid var(--outline);

> button{
    padding: 8px;
    border-radius: 50%;

    outline: 0;
    cursor: pointer;

    &:hover{
        background: var(--twitter-dark-hover);
    }
}
`;
export const BackIcon = styled(ArrowLeft)`
    width: 24px;
    height: 24px;

    fill: var(--twitter)

`;
export const ProfileInfo = styled.div`
margin-left: 12px;
flex-direction: column;

>strong{
    font-size: 19px;
}span{
    font-size: 15px;
    color: var(--gray);
}
`;

/* a barrinha fixada em baixo */
export const ButtonMenu = styled.div`
     position: fixed;
     bottom: 0;
     left: 0;
     z-index: 2;

     background: var(--primary);
     width: 100%;
     /* linha fina: */
     border-top: 1px solid var(--outline);
     /* icones ficarem dividos */
     display: flex;
     justify-content: space-between;

     padding: 8px min(46px, max(10vh, 10px));

     @media (min-width: 500px){
         display: none;
         /* desaparece depois de 500px */
     }
`;

const iconsCSS = css`
 width: 33px;
 height: 31px;

 cursor: pointer;
 fill: var(--gray);

 &:hover,
 &:active{
     fill: var(--twitter);
 }
`;

export const HomeIcon = styled(Home)`${iconsCSS}`;
export const SearchIcon = styled(Search)`${iconsCSS}`;
export const BellIcon = styled(Notifications)`${iconsCSS}`;
export const DmIcon = styled(Email)`${iconsCSS}`;

