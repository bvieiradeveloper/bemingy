import styled from "styled-components";
import {darken} from "polished";

export const Container = styled.form`
    display: flex;
    flex-direction: column;

    h2{
        color: var(--text-title);
    }

    input{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        border: 1px solid #d7d7d7;
        font-weight: 400;
        font-size: 1rem;
        border: 0;
        background: #e7e9ee;
        &::placeholder{
            color: var(--text-body);
        }

        & + input{
            margin-top: 1rem;
        };
    }

    button[type="submit"]{
        width: 100%;
        padding: 0 1.5rem;
        margin-top: 1.5rem;
        border-radius: 0.25rem;
        color: #fff;
        font-size: 1rem;
        border: 0;
        background: var(--green);
        height: 4rem;
    }
`

export const TransactionTypeContainer = styled.div`
margin: 1rem 0;
display: grid;
grid-template-columns: 1fr 1fr;
gap: 0.5rem;

transition: border-color 0.2s;
`
interface RadioButtonProps{
    isActive: boolean;
}
export const RadioButton = styled.button<RadioButtonProps>`
 height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${ props => props.isActive ? 'red' : 'transparent'};

    img{
        width: 20px;
        height: 20px;
    }

    span{
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color:var(--text-title);
    }

    &:hover{
        border-color: ${darken(0.5, '#d7d7d7')};
    }
`