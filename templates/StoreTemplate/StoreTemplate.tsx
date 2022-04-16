import { useState } from "react";
import { Modal, Typography } from "@mui/material";
import { StoreType } from "models/store";
import Image from "next/image";
import { DefaultModal } from "../../components/DefaultModal/DefaultModal";
import * as S from "./StoreTemplate.style";
import { useEffect } from "react";
import { useModal } from "hooks/useModal";
import { StoreModal } from "./StoreModal/StoreModal";

interface StoreTemplateProps {
  stores: StoreType[];
}

const StoreTemplate: React.FC<StoreTemplateProps> = (props) => {
  const [selectedStore, setSelectedStore] = useState<StoreType | null>(null);
  const { open, onOpen, onClose, onToggle } = useModal();

  const onClickStore = (store: StoreType) => {
    setSelectedStore(store);
    onOpen();
  };

  return (
    <S.Wrapper>
      <Typography className="title" variant="h4">
        EAT
      </Typography>
      <S.Container>
        {props.stores &&
          props.stores.map((store, index) => {
            return (
              <div
                key={index}
                className="store-thumbnail__container"
                onClick={() => onClickStore(store)}
              >
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
      {open && selectedStore && (
        <StoreModal open={open} onClose={onClose} store={selectedStore} />
      )}
    </S.Wrapper>
  );
};

export default StoreTemplate;
