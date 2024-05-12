import styled from "styled-components";
import closeIcon from "../../assets/close.svg";
import kakaoIcon from "../../assets/kakao.svg";
import facebookIcon from "../../assets/facebook.svg";
import linkCopyIcon from "../../assets/copylink.svg";
import ReactModal from "react-modal";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Toast from "folder/toast/Toast";

const Background = styled.p`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  background-color: #000;
  opacity: 0.4;
  z-index: 100;
`;

const Layout = styled.div`
  border-radius: 15px;
  border: 1px solid var(--Linkbrary-gray20, #ccd5e3);
  background: var(--Linkbrary-white, #fff);
  z-index: 101;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 360px;
  display: inline-flex;
  padding: 32px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  color: #373740;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const SubTitle = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--Linkbrary-gray60, #9fa6b2);
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`;

const IconsLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Icon = styled.img`
  width: 42px;
  height: 100%;
`;

const IconDesc = styled.p`
  color: var(--Linkbrary-gray100, #373740);
  text-align: center;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px; /* 115.385% */
`;

const Close = styled.img`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;

export const ShareModal = ({ title, subtitle, shareLink, onClose }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // 2초 후에 복사 상태 초기화
  };

  const handleClickCancle = () => {
    onClose();
  };

  return (
    <ReactModal isOpen>
      <div style={{ positon: "relative" }}>
        <Background />
        <Layout>
          <Title>{title}</Title>
          <SubTitle>{subtitle}</SubTitle>
          <div style={{ marginTop: "24px", display: "flex", gap: "32px" }}>
            <IconsLayout>
              <Icon src={kakaoIcon} alt="kakaotalk" />
              <IconDesc>카카오톡</IconDesc>
            </IconsLayout>
            <IconsLayout>
              <Icon src={facebookIcon} alt="facebook" />
              <IconDesc>페이스북</IconDesc>
            </IconsLayout>
            <CopyToClipboard text={shareLink} onCopy={handleCopy}>
              <IconsLayout>
                <Icon src={linkCopyIcon} alt="linkcopy" />
                <IconDesc>링크 복사</IconDesc>
              </IconsLayout>
            </CopyToClipboard>
          </div>
          <Close src={closeIcon} alt="X" onClick={handleClickCancle} />
        </Layout>
        <Toast isCopied={isCopied}/>
      </div>
    </ReactModal>
  );
};
