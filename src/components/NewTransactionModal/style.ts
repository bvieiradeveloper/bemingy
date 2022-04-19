import styled from "styled-components";

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