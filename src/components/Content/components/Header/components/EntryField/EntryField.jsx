import { MainBlock, MainTextField } from './style';
import getSelectValue from '../../../../utils/getSelectValue';

const EntryField = ({
  mainLabelValue,
  mainFieldValue,
  handleMainFieldChange,
}) => {
  return (
    <MainBlock>
      <MainTextField
        label={mainLabelValue}
        value={mainFieldValue}
        color="primary"
        variant="outlined"
        autoFocus={false}
        onFocus={getSelectValue}
        onChange={handleMainFieldChange}
        fullWidth
        type="number"
      />
    </MainBlock>
  );
};

export default EntryField;
