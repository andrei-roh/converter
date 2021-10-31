import { MainTextField } from './style';
import TextField from '@material-ui/core/TextField';
import getFormatNumber from '../../../../utils/getFormatNumber';

const EntryField = ({
  mainLabelValue,
  mainFieldValue,
  handleMainFieldChange,
}) => {
  const getSelectValue = (element) => {
    return element.target.select();
  };
  return (
    <MainTextField>
      <TextField
        label={mainLabelValue}
        type="number"
        value={getFormatNumber(mainFieldValue)}
        variant="outlined"
        autoFocus={false}
        onFocus={getSelectValue}
        onChange={handleMainFieldChange}
        fullWidth
      />
    </MainTextField>
  );
};

export default EntryField;
