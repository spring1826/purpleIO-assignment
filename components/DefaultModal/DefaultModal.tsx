import * as S from "./DefaultModal.style";

interface DefaultModalProps {
  children: React.ReactNode;
  onClose: any;
  open: boolean;
}

export const DefaultModal: React.FC<DefaultModalProps> = (props) => {
  return (
    <S.Wrapper open={props.open} onClose={props.onClose}>
      <S.Container>{props.children}</S.Container>
    </S.Wrapper>
  );
};
