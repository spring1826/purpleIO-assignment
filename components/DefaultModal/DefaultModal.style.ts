import styled from "styled-components";
import Modal from "@mui/material/Modal";

export const Wrapper = styled(Modal)`
  width: 100%;
  height: 100%;
  padding: 40px;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 8px;

  @media (max-width: 768px) {
    border-radius: 0px;
  }
`;
