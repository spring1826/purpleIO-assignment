import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  .Swiper {
    width: 100%;
    height: 100%;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 80px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .close__icon {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 20px;
    cursor: pointer;
  }

  .description {
    white-space: pre-line;
  }
`;
