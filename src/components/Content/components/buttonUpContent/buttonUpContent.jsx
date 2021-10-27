import ArrowUpwardRounded from '@material-ui/icons/ArrowDropUp';
import { ButtonTextField } from './style';

const ButtonUpContent = ({ label, value, id, exchangeMainField }) => {
  const handleButtonClick = () => {
    exchangeMainField(label, value, id);
  };
  return (
    <ButtonTextField onClick={handleButtonClick}>
      <ArrowUpwardRounded />
    </ButtonTextField>
  );
};

export default ButtonUpContent;
