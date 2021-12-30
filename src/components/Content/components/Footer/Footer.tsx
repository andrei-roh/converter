import { FooterBlock } from './style';

const Footer = () => {
  const getCurrentYear = () => {
    const today = new Date();
    return today.getFullYear();
  };
  return (
    <>
      <FooterBlock>{getCurrentYear()}</FooterBlock>
    </>
  );
};

export default Footer;
