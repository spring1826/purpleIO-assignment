import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { DefaultModal } from "components/DefaultModal/DefaultModal";
import { StoreType } from "models/store";
import CloseIcon from "assets/icons/Close.svg";
import { Typography } from "@mui/material";
import Link from "next/link";
import * as S from "./StoreModal.style";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface StoreModalProps {
  store: StoreType;
  onClose: any;
  open: boolean;
}

export const StoreModal: React.FC<StoreModalProps> = (props) => {
  return (
    <DefaultModal open={props.open} onClose={props.onClose}>
      <S.Wrapper>
        <Swiper
          className="Swiper"
          slidesPerView={1}
          loop={true}
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <Image
              alt={props.store.name}
              src={props.store.thumb}
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt={props.store.name}
              src={props.store.image}
              layout="fill"
            />
          </SwiperSlide>
        </Swiper>
        <S.Container>
          <div className="close__icon" onClick={props.onClose}>
            <Image alt="close-icon" src={CloseIcon} width={24} height={24} />
          </div>
          <Typography variant="h3">{props.store.name}</Typography>
          <div>
            <Typography className="description">
              {props.store.description}
            </Typography>
            {props.store.url && (
              <Link href={props.store.url} passHref>
                <Typography variant="caption">{props.store.url}</Typography>
              </Link>
            )}
          </div>
        </S.Container>
      </S.Wrapper>
    </DefaultModal>
  );
};
