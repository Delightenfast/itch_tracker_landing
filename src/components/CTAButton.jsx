import styled from "styled-components";
import PlayStoreIcon from '../assets/playstore_icon.svg';
import AppStoreIcon from '../assets/appstore_icon.svg';

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

// 개별 스토어 버튼 (PC에서만 보임)
const StyledButton = styled.a`
 display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 11px 22px; /* Increased padding for larger buttons */
  font-size: 1.5rem; /* Increased font size */
  font-weight: 700;
  color: #fff;
  background-color: rgba(71, 41, 126, 1);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  text-decoration: none;

  &:hover {
    background-color: rgba(71, 41, 126, 0.8);
  }

  img {
    height: 24px; /* Increased icon size */
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    display: none; /* 모바일에서는 숨김 */

  }
`;

// 모바일 전용 다운로드 버튼
const MobileDownloadButton = styled.button`
  display: none; /* 기본적으로 숨김 */
  padding: 12px 24px;
  background-color: rgba(71, 41, 126, 1);
  color: white;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: rgba(71, 41, 126, 0.8);
  }

  @media (max-width: 768px) {
    display: block; /* 모바일에서는 보이도록 변경 */
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const AppDownloadButtons = () => {
    const appStoreLink = "https://apps.apple.com/app/id6736654359";
    const playStoreLink = "https://play.google.com/store/apps/details?id=com.Delight.todacmvp";

    // OS에 맞는 스토어로 이동
    const handleMobileDownload = () => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;

        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            window.location.href = appStoreLink; // iOS → App Store로 이동
        } else if (/android/i.test(userAgent)) {
            window.location.href = playStoreLink; // Android → Google Play로 이동
        } else {
            // 기본적으로 App Store로 이동 (웹뷰 등)
            window.location.href = appStoreLink;
        }
    };

    return (
        <>
            {/* PC에서는 개별 스토어 버튼 표시 */}
            <ButtonContainer>
                <StyledButton href={appStoreLink} target="_blank" rel="noopener noreferrer">
                    <img src={AppStoreIcon} alt="App Store" />
                    App Store
                </StyledButton>
                <StyledButton href={playStoreLink} target="_blank" rel="noopener noreferrer">
                    <img src={PlayStoreIcon} alt="Google Play" />
                    Google Play
                </StyledButton>
            </ButtonContainer>

            {/* 모바일에서는 OS에 맞는 스토어로 리디렉션 */}
            <MobileDownloadButton onClick={handleMobileDownload}>
                앱 다운로드
            </MobileDownloadButton>
        </>
    );
};

export default AppDownloadButtons;
