import styled from 'styled-components';
import { Form as StyledForm } from '@rocketseat/unform';

export const Form = styled(StyledForm)`
  div {
    position: relative;

    a svg {
      position: absolute;
      width: 24px;
      height: 24px;
      color: #2d3436;
    }
  }

  h1 {
    display: block;
    text-align: center;
    color: #2d3436;
    margin-bottom: 20px;
    font-size: 20px;
  }

  input,
  textarea {
    width: 100%;
    margin: 5px 0;
    border: 1px solid #eee;
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 14px;
  }

  textarea {
    height: 100px;
  }

  button {
    width: 100%;
  }
`;

export const Character = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Series = styled.div`
  margin-bottom: 10px;
  padding-bottom: 10px;

  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: unset;
  }
`;
