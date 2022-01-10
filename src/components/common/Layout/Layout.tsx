import { FC } from 'react';
import { css } from '@emotion/react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { breakPoint } from '@/styles/constants';

type Props = {
  pageName?: string;
};

const Layout: FC<Props> = ({ pageName, children }) => {
  return (
    <div css={[globalBackGround, globalLayout]}>
      <div css={contentsBlock}>
        <div css={container}>
          <Header />
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const globalBackGround = css`
  background-image: url('/background.png');
  background-position: center center;
  background-size: cover;
`;

const globalLayout = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const contentsBlock = css`
  flex: 1 0 auto;
  min-height: 720px;
  margin: 80px 0;

  @media (max-width: ${breakPoint.sm - 1}px) {
    margin: 40px 0;
  }
`;

const container = css`
  max-width: 600px;
  padding: 0 4%;
  margin: 0 auto;

  @media (max-width: ${breakPoint.sm - 1}px) {
    padding: 0 8%;
  }
`;

export default Layout;
