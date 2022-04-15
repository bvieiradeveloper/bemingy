import styled from "styled-components";

export const Container = styled.div`
max-width: 1120px;
margin-top: 4rem;
padding: 1rem 2.5rem;

table{
  width: 100%;
  border-spacing: 0 0.5rem;

  th{
    color: var(--text-body);
    font-weight: 400;
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5rem;
  }

  td{
    padding: 1rem 2rem;
    border: 0;
    background: var(--shape);
    border-radius: 0.25rem;
    font-weight: 400;
    color:var(--text-body);

    &:first-child{
      color: var(--text-title);
    }

    &.withdraw{
      color: var(--red);
    }

    &.deposit{
      color: var(--green);
    }
  }
}
`