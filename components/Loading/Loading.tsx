import Image from "next/image";
import LoadingImage from "assets/images/loading.png";
import * as S from "./Loading.style";

export const Loading: React.FC<{}> = (props) => {
  return (
    <S.Wrapper>
      <Image alt="loading" src={LoadingImage} width={500} height={300} />
    </S.Wrapper>
  );
};
