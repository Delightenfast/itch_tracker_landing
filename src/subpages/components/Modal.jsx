import React, { useState, useEffect } from "react";
import ReactConfetti from "react-confetti";

import styled from "styled-components";

// =================== Styled ===================
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background: white;
  border-radius: 20px;
  max-width: 960px;
  width: 90%;
  padding: 40px;
  position: relative;
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 24px;
  }
`;

const Image = styled.img`
  width: 320px;
  border-radius: 12px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Content = styled.div`
  flex: 1;
  align-items: flex-start;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h2`
  font-size: 22px;
  margin-bottom: 8px;
`;

const Subtitle = styled.h4`
  font-size: 16px;
  margin-bottom: 10px;
  color: #5a38b9;
`;

const Description = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
  color: #444;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 440px;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  max-width: 440px;
  padding: 12px;
  margin-bottom: 12px;
  border: 2px solid #3e4ed4;
  border-radius: 8px;
  font-size: 14px;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 12px 24px;
  background-color: #3e4ed4;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 8px; /* 이걸로 여백 조절 */
  align-self: flex-start;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 18px;
  right: 20px;
  font-size: 20px;
  border: none;
  background: none;
  cursor: pointer;
`;

// ✅ 결과 메시지 모달
const ResultModal = ({ message, onClose }) => {
    const [showConfetti, setShowConfetti] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShowConfetti(false), 5000); // 3초 후 멈춤
        return () => clearTimeout(timer);
    }, []);

    return (
        <Overlay onClick={onClose}>
            <div
                style={{
                    background: "#fff",
                    borderRadius: "16px",
                    padding: "32px",
                    minWidth: "300px",
                    textAlign: "center",
                    position: "relative",
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {showConfetti && <ReactConfetti width={400} height={300} numberOfPieces={1000} recycle={false} />}
                <h3>{message}</h3>
                <Button onClick={onClose}>닫기</Button>
            </div>
        </Overlay>
    );
};

// =============== MAIN MODAL ===============
export default function Modal({ data, onClose }) {
    const [email, setEmail] = useState("");
    const [note, setNote] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [resultMessage, setResultMessage] = useState(null);

    if (!data) return null;

    const validateEmail = (email) => {
        return email.includes("@") && email.includes(".");
    };

    const handleSubmit = async () => {
        if (!validateEmail(email)) {
            alert("올바른 이메일을 입력해주세요.");
            return;
        }

        setIsLoading(true);

        try {
            // ⏳ 여기에 실제 전송 로직이 들어갑니다
            await new Promise((res) => setTimeout(res, 1500)); // 가짜 딜레이

            console.log("✅ 전송 완료:");
            console.log("이메일:", email);
            console.log("메모:", note);

            setResultMessage("전송이 완료되었습니다!");

            // Lottie 애니메이션을 여기에 추가할 수 있습니다.


            setEmail("");
            setNote("");
        } catch (err) {
            console.error("전송 실패:", err);
            setResultMessage("전송에 실패했습니다. 다시 시도해주세요.");
        } finally {
            setIsLoading(false);
        }
    };

    const closeAll = () => {
        setResultMessage(null);
        onClose();
    };

    return (
        <>
            <Overlay onClick={onClose}>
                <ModalContainer onClick={(e) => e.stopPropagation()}>
                    <CloseBtn onClick={onClose}>✖</CloseBtn>
                    <Image src={data.image} alt={data.title} />
                    <Content>
                        <Title>{data.title}</Title>
                        <Subtitle>{data.subtitle}</Subtitle>
                        <Description>{data.description}</Description>
                        <Form>
                            <Input
                                type="email"
                                placeholder="이메일을 입력해주세요"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Input
                                type="text"
                                placeholder="(옵션) 토닥이 그릴톡이 있다면 어떻게 쓰고 싶으신가요?"
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                            />
                            <Button onClick={handleSubmit} disabled={isLoading}>
                                {isLoading ? "전송 중..." : "전송"}
                            </Button>
                        </Form>
                    </Content>
                </ModalContainer>
            </Overlay>

            {resultMessage && (
                <ResultModal message={resultMessage} onClose={closeAll} />
            )}
        </>
    );
}
