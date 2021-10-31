import More from '../More/More';
import { TextFieldBlock, SmallTextField } from './style';
import getFormatNumber from '../../utils/getFormatNumber';
import ScrollOnTop from './components/ScrollOnTop/ScrollOnTop';

const TableField = ({ element, rate, exchangeMainField, showScrollButton }) => {
  return (
    <TextFieldBlock key={element.Cur_ID}>
      <SmallTextField
        label={
          element.Cur_Name.length < 36
            ? element.Cur_Name
            : element.Cur_Name.substr(0, 3)
        }
        type="number"
        value={getFormatNumber(rate)}
        margin="normal"
        variant="filled"
        disabled={true}
      />
      <More
        label={element.Cur_Name}
        value={rate}
        id={element.Cur_ID}
        exchangeMainField={exchangeMainField}
      />
      {showScrollButton ? <ScrollOnTop /> : null}
    </TextFieldBlock>
  );
};

export default TableField;
