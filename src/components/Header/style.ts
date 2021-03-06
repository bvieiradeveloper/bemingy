import styled from "styled-components";


export const Container  = styled.header`
background-color: var(--blue);
`

export const Content = styled.div`
 display: flex;
 justify-content: space-between;
 max-width: 1120px;
 margin: 0 auto;
 padding: 2rem 1rem 10rem;
 align-items: center;

  button{
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    border-radius: 0.25rem;
    padding: 0 2rem;
    height: 3rem;
    transition: .3s;
    &:hover{
      filter: brightness(0.9);
    }
 }
`