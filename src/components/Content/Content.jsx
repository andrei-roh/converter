import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import EntryField from './components/EntryField/EntryField';
import TableField from './components/TableField/TableField';
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
    createOtherRate(id);
  };

  const otherCurrencyRateToOther =
    Object.values(belarusRubleToOther).concat(belarusRuble);

  const getRate = () => {
    if (!showBelarusRubleRate) return belarusRubleToOther;
    return otherCurrencyRateToOther;
  };

  const createOtherRate = (currencyId) => {
    setCurrentMainId(currencyId);
    const coefficientCur_OfficialRate = otherCurrencyRateToOther.find(
      (element) => element.Cur_ID === currencyId
    ).Cur_OfficialRate;
    const coefficientCur_Scale = otherCurrencyRateToOther.find(
      (element) => element.Cur_ID === currencyId
    ).Cur_Scale;
    otherCurrencyRateToOther.map((element) => {
      if (element.Cur_ID === currencyId) {
        element.Cur_Scale = 1;
        return (element.Cur_OfficialRate = 1);
      }
      return (element.Cur_OfficialRate =
        (coefficientCur_Scale * element.Cur_OfficialRate) /
        coefficientCur_OfficialRate);
    });
  };

  const defaultContent = Object.values(getRate())
    .filter((element) => defaultValue.includes(element.Cur_ID))
    .map((element) => {
      const rate =
        (element.Cur_Scale / element.Cur_OfficialRate) * mainFieldValue;
      return element.Cur_ID !== currentMainId ? (
        <TableField
          element={element}
          rate={rate}
          exchangeMainField={exchangeMainField}
        />
      ) : null;
    });

  const allContent = Object.values(getRate()).map((element) => {
    const rate =
      (element.Cur_Scale / element.Cur_OfficialRate) * mainFieldValue;
    return element.Cur_ID !== currentMainId ? (
      <TableField
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
