import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import {
  ContentBigBlock,
  ContentSmallBlock,
  ContentMainTextField,
} from './style';

const Content = ({
  belarusianRubleRate,
  belarusianRubleRateToOtherCurrencies,
}) => {
  const [mainFieldValue, setMainFieldValue] = useState(belarusianRubleRate);
  const handleMainFieldChange = (element) => {
    setMainFieldValue(element.target.value);
  };
  const content = Object.values(belarusianRubleRateToOtherCurrencies).map(
    (element) => {
      const rate =
        (element.Cur_Scale / element.Cur_OfficialRate) * mainFieldValue;
      return element.Cur_ID !== 457 ? (
        <div key={element.Cur_ID}>
          <TextField
            label={element.Cur_Name}
            type="number"
            value={rate}
            margin="normal"
            disabled={true}
          />
        </div>
      ) : null;
    }
  );
  return (
    <ContentBigBlock>
      <ContentMainTextField>
        <TextField
          label={'Белорусский рубль'}
          type="number"
          value={mainFieldValue}
          variant="filled"
          autoFocus={true}
          onChange={handleMainFieldChange}
          fullWidth
        />
      </ContentMainTextField>
      <ContentSmallBlock>{content}</ContentSmallBlock>
    </ContentBigBlock>
  );
};

export default Content;
