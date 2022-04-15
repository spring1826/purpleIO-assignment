import { Typography } from "@mui/material";
import * as S from "./Footer.style";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = (props) => {
  // TODO: 시간 여유 된다면 git, blog, email, tel 추가하기, 이력서 링크!!
  return (
    <S.Wtrapper>
      <Typography variant="caption">AWESOME FOOD STORE</Typography>
      <Typography variant="caption">{`@ ${new Date().getFullYear()} 장봄`}</Typography>
    </S.Wtrapper>
  );
};
