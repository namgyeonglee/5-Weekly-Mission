import styled from "styled-components";
import closeIcon from "../../assets/close.svg";

const Background = styled.p`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 1440px;
  background-color: #000;
  opacity: 0.4;
  z-index: 100;
`;

const Layout = styled.div`
  border-radius: 15px;
  border: 1px solid var(--Linkbrary-gray20, #CCD5E3);
  background: var(--Linkbrary-white, #FFF);
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

const Input = styled.input`
  margin-top: 24px;
  display: flex;
  width: 280px;
  padding: 18px 15px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--Linkbrary-gray20, #CCD5E3);
  background: var(--Linkbrary-white, #FFF);

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
  color: var(--Grey-Light, #F5F5F5);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
`;

const Close = styled.img`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;

export function Modal({ title, button, onClick }) {
  return (
    <div style={{ positon: "relative" }}>
      <Background />
      <Layout>
        <Title>{title}</Title>
        <Input placeholder="내용 입력"/>
        <Button>{button}</Button>
        <Close src={closeIcon} alt="X" onClick={onClick}/>
      </Layout>
    </div>
  );
}