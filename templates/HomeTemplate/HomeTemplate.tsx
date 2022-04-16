import { Typography } from "@mui/material";
import SampleImage from "assets/images/sample.png";
import FileImage from "assets/images/file.png";
import Image from "next/image";
import * as S from "./HomeTemplate.style";

interface HomeTemplateProps {}

const HomeTemplate: React.FC<HomeTemplateProps> = (props) => {
  return (
    <S.Wrapper>
      <S.Container>
        <Typography className="title" variant="h4" fontWeight={500}>
          purpleIO-assignment
        </Typography>
        <Image
          className="intro-image"
          alt="intro-image"
          src={SampleImage}
          width={1000}
          height={300}
        />
        <S.StackContainer>
          <div className="stack-card">
            <Typography variant="h6" fontWeight={600}>
              기술스택
            </Typography>
            <ul className="list__container">
              <li>next.js</li>
              <li>Typescript</li>
              <li>axios</li>
              <li>styled-components</li>
            </ul>
          </div>
          <div className="stack-card">
            <Typography variant="h6" fontWeight={600}>
              라이브러리
            </Typography>
            <ul className="list__container">
              <li>react-query</li>
              <li>mui</li>
              <li>json-server</li>
              <li>swiper</li>
            </ul>
          </div>
        </S.StackContainer>
        <S.StructureContainer>
          <Typography variant="h6" fontWeight={600}>
            파일구조
          </Typography>
          <div className="structure__container">
            <Image
              alt="file-structure"
              src={FileImage}
              width={500}
              height={700}
            />
            <div className="structure-content__container">
              <Typography variant="body1" fontWeight={600}>
                apis
              </Typography>
              <Typography>axios tnstance 생성</Typography>
              <Typography>
                {
                  "fetch => 도메인이나 기능별로 구분해서 폴더를 생성한 후 각각의 fetch코드를 작성하는 것이 프로젝트가 커지는 경우 더 용이할 것으로 예상됩니다. 이번 프로젝트에서는 하나의 페이지에서만 사용하여 따로 폴더를 생성하지 않았습니다."
                }
              </Typography>
              <Typography variant="body1" fontWeight={600}>
                components
              </Typography>
              <Typography>공통적을 사용되는 컴포넌트 구현</Typography>
              <Typography>
                mui 모달로 default modal구현해 children으로 내부 컨텐츠를 받을
                수 있도록 구현
              </Typography>
              <Typography variant="body1" fontWeight={600}>
                models
              </Typography>
              <Typography>
                데이터를 전달받아 내부의 데이터를 자동완성으로 받기 쉽도록
                데이터의 타입 지정
              </Typography>
              <Typography variant="body1" fontWeight={600}>
                pages
              </Typography>
              <Typography>
                _app파일에 global 스타일, 공통 레이아웃 적용
              </Typography>
              <Typography>_document파일에 style ssr 및 폰트 적용</Typography>
              <Typography>404 error page custom적용</Typography>
              <Typography variant="body1" fontWeight={600}>
                templates
              </Typography>
              <Typography>
                유지 보수를 용이하게 하기 위해 비즈니스 로직(pages)과 레이아웃
                분리
              </Typography>
            </div>
          </div>
        </S.StructureContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default HomeTemplate;
