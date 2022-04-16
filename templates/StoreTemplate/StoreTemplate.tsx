import { Typography } from "@mui/material";
import { StoreType } from "models/store";
import Image from "next/image";
import * as S from "./StoreTemplate.style";

interface StoreTemplateProps {
  stores: StoreType[];
}

const StoreTemplate: React.FC<StoreTemplateProps> = (props) => {
  return (
    <S.Wrapper>
      <Typography className="title" variant="h4">
        EAT
      </Typography>
      <S.Container>
        {props.stores &&
          props.stores.map((store, index) => {
            return (
              <div key={index} className="store-thumbnail__container">
                <Image
                  className="store-thumbnail"
                  alt={store.name}
                  src={store.thumb}
                  width={180}
                  height={180}
                />
              </div>
            );
          })}
      </S.Container>
    </S.Wrapper>
  );
};

export default StoreTemplate;
