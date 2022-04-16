import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as S from "./CustomErrorTeamplate.style";

export const CustomErrorTeamplate: React.FC<{}> = (props) => {
  const router = useRouter();
  const [count, setCount] = useState<number>(5);

  useEffect(() => {
    const countDown = () => {
      if (count === 0) {
        clearInterval(timer);
        return;
      } else setCount(count - 1);
    };

    let timer = setInterval(countDown, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  useEffect(() => {
    if (count === 0) {
      router.push("/");
    }
  }, [count, router]);

  return (
    <S.Wrapper>
      <Typography variant="h2">잘못된 주소입니다😥</Typography>
      <Typography variant="h3">404</Typography>
      <Typography variant="h4">{`${count}초 후 홈화면으로 이동합니다.`}</Typography>
    </S.Wrapper>
  );
};
