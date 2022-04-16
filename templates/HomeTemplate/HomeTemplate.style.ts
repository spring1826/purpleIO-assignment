import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 80px 30px;
`;

export const Container = styled.div`
  max-width: 1056px;
  height: 100%;

  .title {
    margin-bottom: 20px;
  }

  .intro-image {
    border-radius: 10px;
  }
`;

export const StackContainer = styled.div`
  width: 100%;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  border-bottom: 1px solid #d8d8d8;

  .stack-card {
    padding: 16px;
  }

  .list__container {
    & > li {
      list-style-type: circle;
      padding: 5px;
    }
  }
`;

export const StructureContainer = styled.div`
  width: 100%;
  padding: 10px;

  .structure__container {
    padding: 16px;
    display: flex;
  }

  .structure-content__container {
    margin-left: 20px;
  }
`;
