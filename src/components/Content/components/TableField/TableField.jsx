import Change from '../Change/Change';
import { TextFieldBlock, SmallTextField } from './style';
import getFormatNumber from '../../utils/getFormatNumber';
import ScrollOnTop from './components/ScrollOnTop/ScrollOnTop';
import getCopyValue from '../../utils/getCopyValue';

const TableField = ({ element, rate, exchangeMainField, showScrollButton }) => {
  return (
    <TextFieldBlock key={element.Cur_ID}>
      <SmallTextField
        label={
          element.Cur_Name.length < 36
            ? element.Cur_Name
            : element.Cur_Name.substr(0, 3)
        }
        type="text"
        value={getFormatNumber(rate)}
        margin="normal"
        variant="filled"
        onClick={getCopyValue}
        readOnly
      />
      <Change
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
