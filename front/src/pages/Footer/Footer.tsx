import React from "react";
import { FooterContainer, FooterContent } from "../Footer/Footer.style";

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <div>
          공공데이터 포탈에서 받아온 2022년을 기준으로 한 데이터 데이터로 캠핑장
          가기 전 미리 확인하고 가시기 바랍니다
          <br />
          <a href="https://www.data.go.kr/data/15111395/fileData.do">
            <div style={{ display: "flex" }}>
              <span style={{ paddingRight: "5px" }}>ⓒ</span>
              <span style={{ textDecoration: "underline" }}>
                공공 데이터 포탈
              </span>
            </div>
          </a>
        </div>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
