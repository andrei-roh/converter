import ArrowUpwardRounded from '@material-ui/icons/ArrowDropUp';
import { ButtonField } from './style';

const Change = ({ label, value, id, exchangeMainField }) => {
  const handleButtonClick = () => {
    exchangeMainField(label, value, id);
  };
  return (
    <ButtonField onClick={handleButtonClick}>
      <ArrowUpwardRounded />
    </ButtonField>
  );
};

export default Change;
