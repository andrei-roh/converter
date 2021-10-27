import { MainTextField } from './style';
import TextField from '@material-ui/core/TextField';

const EntryField = ({
  mainLabelValue,
  mainFieldValue,
  handleMainFieldChange,
}) => {
  return (
    <MainTextField>
      <TextField
        label={mainLabelValue}
        type="number"
        value={mainFieldValue}
        variant="filled"
        autoFocus={true}
        onChange={handleMainFieldChange}
        fullWidth
      />
    </MainTextField>
  );
};

export default EntryField;
