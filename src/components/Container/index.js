import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 40px auto;

  header {
    display: flex;
    justify-content: center;

    img {
      margin-right: 10px;
      width: 150px;
      object-fit: scale-down;
    }
  }

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export default Container;
