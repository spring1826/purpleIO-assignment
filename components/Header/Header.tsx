import { useRouter } from "next/router";
import Link from "next/link";
import { Typography } from "@mui/material";
import * as S from "./Header.style";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = (props) => {
  // TODO: scroll시 상단에 고정
  const router = useRouter();
  return (
    <S.Wtrapper>
      <nav className="nav__container">
        <Link href="/" passHref>
          <Typography
            className={router.pathname === "/" ? "nav active" : "nav"}
          >
            ABOUT
          </Typography>
        </Link>
        <Link href="/stores" passHref>
          <Typography
            className={router.pathname === "/stores" ? "nav active" : "nav"}
          >
            STORE
          </Typography>
        </Link>
      </nav>
      <Typography variant="h4">AWESOME FOOD STORE</Typography>
    </S.Wtrapper>
  );
};
