import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    display: block;
    color: #2d3436;
    font-size: 16px;
    text-decoration: none;
    margin-bottom: 10px;

    &:hover {
      color: #f0141e;
    }
  }
  img,
  > span {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-top: 20px;
    object-fit: scale-down;
  }
  h1 {
    font-size: 24px;
    margin-top: 10px;
  }
  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const List = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;
  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;
    & + li {
      margin-top: 10px;
    }
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      object-fit: scale-down;
      border: 2px solid #eee;
    }
    div {
      flex: 1;
      margin-left: 15px;
      strong {
        font-size: 16px;
        color: #333;
        border-radius: 2px;
        font-size: 12px;
        font-weight: 600;
        height: 20px;
      }
      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;
