import styled from "styled-components";

export const Wtrapper = styled.div`
  width: 100%;
  padding: 20px;
  border-bottom: 3px solid #454a9e;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav__container {
    display: flex;
  }

  .nav {
    padding: 10px;
    margin-right: 10px;
  }

  .active {
    font-weight: 700;
    color: #454a9e;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;
