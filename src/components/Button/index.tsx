import styled from 'styled-components';
// esse botão vai ser usado pra o editar perfl e tweet
interface Props{
    outlined?: boolean;
}

export default styled.button<Props>`
    /* o background se n tiver outline vai ser o botão azul */
    background: ${(props) => (props.outlined ? 'transparent' : 'var(--twitter)')};
    /* muda o escrito do botão: */
    color: ${props => (props.outlined ? 'var(--twitter)' : 'var(--white)')};

    border: ${props => props.outlined ? '1px solid var(--twitter)' : 'none'};

    padding: 16px;
    border-radius: 25px;

    font-weight: bold;
    font-size: 15px;

    cursor: pointer;
    outline: 0;
    
    &:hover{
        background: ${props => 
        props.outlined
         ? 'var(--twitter-dark-hover)'
        : 'var(--twitter-light-hover)'};
    }
`;
