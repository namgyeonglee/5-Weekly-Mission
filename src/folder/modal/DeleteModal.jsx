import styled from "styled-components";
import closeIcon from "../../assets/close.svg";
import ReactModal from "react-modal";

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

const Button = styled.button`
  margin-top: 15px;
  display: flex;
  width: 280px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  color: var(--Grey-Light, #f5f5f5);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background: #FF5B56;
`;

const Close = styled.img`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;

export const DeleteModal = ({ title, subtitle, button, onSubmit, onClose }) => {
  const handleClickSubmit = () => {
    onSubmit();
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
          <Button onClick={handleClickSubmit}>{button}</Button>
          <Close src={closeIcon} alt="X" onClick={handleClickCancle} />
        </Layout>
      </div>
    </ReactModal>
  );
};
