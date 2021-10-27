import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import EntryField from './components/EntryField/EntryField';
import TableField from './components/TableField/TableField';
import createOtherRate from './utils/createOtherRate';
import getRate from './utils/getRate';
import { BigBlock, SmallBlock } from './style';

const Content = ({ defaultValue, belarusRuble, belarusRubleToOther }) => {
  const [showBelarusRubleRate, setShowBelarusRubleRate] = useState(false);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const handleShowAllCourses = () => {
    setShowAllCourses(!showAllCourses);
  };
  const [mainFieldValue, setMainFieldValue] = useState(
    belarusRuble.Cur_OfficialRate
  );
  const handleMainFieldChange = (element) => {
    setMainFieldValue(element.target.value);
  };
  const [currentMainId, setCurrentMainId] = useState(1);

  const [mainLabelValue, setMainLabelValue] = useState(belarusRuble.Cur_Name);
  const exchangeMainField = (label, value, id) => {
    setMainLabelValue(label);
    setMainFieldValue(value);
    id !== belarusRuble.Cur_ID
      ? setShowBelarusRubleRate(true)
      : setShowBelarusRubleRate(false);
    createOtherRate(id, setCurrentMainId, otherCurrencyRateToOther);
  };

  const otherCurrencyRateToOther =
    Object.values(belarusRubleToOther).concat(belarusRuble);

  const defaultContent = Object.values(
    getRate(showBelarusRubleRate, belarusRubleToOther, otherCurrencyRateToOther)
  )
    .filter((element) => defaultValue.includes(element.Cur_ID))
    .map((element) => {
      const rate =
        (element.Cur_Scale / element.Cur_OfficialRate) * mainFieldValue;
      return element.Cur_ID !== currentMainId ? (
        <TableField
          key={element.Cur_ID}
          element={element}
          rate={rate}
          exchangeMainField={exchangeMainField}
        />
      ) : null;
    });

  const allContent = Object.values(
    getRate(showBelarusRubleRate, belarusRubleToOther, otherCurrencyRateToOther)
  ).map((element) => {
    const rate =
      (element.Cur_Scale / element.Cur_OfficialRate) * mainFieldValue;
    return element.Cur_ID !== currentMainId ? (
      <TableField
        key={element.Cur_ID}
        element={element}
        rate={rate}
        exchangeMainField={exchangeMainField}
      />
    ) : null;
  });
  return (
    <BigBlock>
      <EntryField
        mainLabelValue={mainLabelValue}
        mainFieldValue={mainFieldValue}
        handleMainFieldChange={handleMainFieldChange}
      />
      <SmallBlock>{!showAllCourses ? defaultContent : allContent}</SmallBlock>
      {!showAllCourses ? (
        <Button variant="contained" onClick={handleShowAllCourses}>
          Показать больше
        </Button>
      ) : null}
    </BigBlock>
  );
};

export default Content;
