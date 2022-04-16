import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 287px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    width: 1056px;
    padding: 30px 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
      width: 100%;
      padding: 30px 0;
    }
  }
`;

export const Container = styled.div`
  width: 1056px;
  display: flex;
  flex-wrap: wrap;

  .store-thumbnail__container {
    margin: 15px;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
      box-shadow: 0px -5px 10px #848484;
    }
  }

  .store-thumbnail {
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
  }
`;
