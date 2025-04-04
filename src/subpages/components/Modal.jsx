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
    width: 80%;
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
  margin-bottom: 0px;
`;

const Description = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
  color: #444;

  text-align: left;
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
  border: 2px solid rgba(107, 78, 197, 1.0);
  border-radius: 8px;
  font-size: 14px;
  box-sizing: border-box;

    &:focus {
    outline: none;
    border-color: rgba(107, 78, 197, 1.0);
    box-shadow: 0 0 5px rgba(107, 78, 197, 0.5);
    }
`;

const Button = styled.button`
  padding: 12px 24px;
  background-color: rgba(107, 78, 197, 1.0);
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 8px; /* 이걸로 여백 조절 */
  align-self: flex-start;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  &:hover {
    background-color: rgba(107, 78, 197, 0.8);
  }
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

        if (message !== "메일로 곧 소식을 전해드릴게요!") {
            setShowConfetti(false);
            return;
        }

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
            const response = await fetch("https://develop.delight-api.com/landing-page/email-register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + data.token
                },
                body: JSON.stringify({
                    "uuid": data.uuid,
                    "utm": data.utm,
                    "category": data.category,
                    "email": email,
                    "description": note || "",
                }),
            });

            // ✅ 여기서 403, 400 등 상태 체크
            if (!response.ok) {
                const errorText = await response.text();
                setResultMessage("네트워크 문제로, 다시 전송 버튼 눌러주세요");
                return;
            }

            setResultMessage("메일로 곧 소식을 전해드릴게요!");

            setEmail("");
            setNote("");
        } catch (err) {
            setResultMessage("네트워크 문제로, 다시 전송 버튼 눌러주세요");
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
                        <Description>{data.descriptions[0]}<br /><br />{data.descriptions[1]}</Description>
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
                                {isLoading ? "전송 중..." : data.sendMessage}
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
