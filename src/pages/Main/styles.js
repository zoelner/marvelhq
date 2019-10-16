import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #2d3436;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;
  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      img {
        height: 45px;
        width: 60px;
        object-fit: cover;
        border-radius: 4px;
        box-shadow: 1px 2px 2px 0px rgba(0, 0, 0, 0.1);
      }

      span {
        margin-left: 10px;
      }
    }

    & + li {
      border-top: 1px solid #eee;
    }
    a {
      color: #2d3436;
      text-decoration: none;
      font-weight: 700;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;

    li {
      color: #2d3436;
      text-decoration: none;
      cursor: pointer;
      a {
        padding: 8px 16px;
        border: 1px solid #ddd;

        svg {
          color: #2d3436;
        }
      }
      &.previous a {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
      }

      &.selected a {
        background-color: #2d3436;
        color: #ddd;
      }

      &.next a {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
      }
    }
  }
`;
