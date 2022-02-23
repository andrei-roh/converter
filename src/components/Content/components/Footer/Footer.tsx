import { FooterBlock } from './style';
import Link from '@material-ui/core/Link';

const Footer = () => {
  const getCurrentYear = () => {
    const today = new Date();
    return today.getFullYear();
  };
  return (
    <FooterBlock>
      <Link
        underline="none"
        color="inherit"
        href="https://github.com/andrei-roh"
        target="_blank"
      >
        {getCurrentYear()}
      </Link>
    </FooterBlock>
  );
};

export default Footer;
