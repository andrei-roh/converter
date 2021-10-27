import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonUpContent from './components/buttonUpContent/buttonUpContent';
import {
  ContentBigBlock,
  ContentSmallBlock,
  ContentMainTextField,
  ContentSmallTextField,
} from './style';

const defaultValue = [431, 451, 456, 449, 1];
const belarusinRuble = {
  Cur_Abbreviation: 'BEL',
  Cur_ID: 1,
  Cur_Name: 'Белорусский рубль',
  Cur_OfficialRate: 1,
  Cur_Scale: 1,
};

const Content = ({
  belarusianRubleRate,
  belarusianRubleRateToOtherCurrencies,
}) => {
  const [showBelarusianRubleRate, setShowBelarusianRubleRate] = useState(false);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const handleShowAllCourses = () => {
    setShowAllCourses(!showAllCourses);
  };
  const [mainFieldValue, setMainFieldValue] = useState(belarusianRubleRate);
  const handleMainFieldChange = (element) => {
    setMainFieldValue(element.target.value);
  };
  const [currentMainId, setCurrentMainId] = useState(1);

  const [mainLabelValue, setMainLabelValue] = useState('Белорусский рубль');
  const exchangeMainField = (label, value, id) => {
    setMainLabelValue(label);
    setMainFieldValue(value);
    id !== 1
      ? setShowBelarusianRubleRate(true)
      : setShowBelarusianRubleRate(false);
    createOtherRate(id);
    console.log(otherCurrencyRateToOtherCurrencies);
  };

  const otherCurrencyRateToOtherCurrencies = Object.values(
    belarusianRubleRateToOtherCurrencies
  ).concat(belarusinRuble);

  const getRate = () => {
    if (!showBelarusianRubleRate) return belarusianRubleRateToOtherCurrencies;
    return otherCurrencyRateToOtherCurrencies;
  };

  const createOtherRate = (currencyId) => {
    setCurrentMainId(currencyId);
    const coefficientCur_OfficialRate = otherCurrencyRateToOtherCurrencies.find(
      (element) => element.Cur_ID === currencyId
    ).Cur_OfficialRate;
    const coefficientCur_Scale = otherCurrencyRateToOtherCurrencies.find(
      (element) => element.Cur_ID === currencyId
    ).Cur_Scale;
    otherCurrencyRateToOtherCurrencies.map((element) => {
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
        <ContentSmallTextField key={element.Cur_ID}>
          <TextField
            label={element.Cur_Name}
            type="number"
            value={rate}
            margin="normal"
            variant="filled"
            disabled={true}
          />
          <ButtonUpContent
            label={element.Cur_Name}
            value={rate}
            id={element.Cur_ID}
            exchangeMainField={exchangeMainField}
          />
        </ContentSmallTextField>
      ) : null;
    });

  const allContent = Object.values(getRate()).map((element) => {
    const rate =
      (element.Cur_Scale / element.Cur_OfficialRate) * mainFieldValue;
    return element.Cur_ID !== currentMainId ? (
      <ContentSmallTextField key={element.Cur_ID}>
        <TextField
          label={
            element.Cur_Name.length < 36
              ? element.Cur_Name
              : element.Cur_Name.substr(0, 3)
          }
          type="number"
          value={rate}
          margin="normal"
          variant="filled"
          disabled={true}
        />
        <ButtonUpContent
          label={element.Cur_Name}
          value={rate}
          id={element.Cur_ID}
          exchangeMainField={exchangeMainField}
        />
      </ContentSmallTextField>
    ) : null;
  });
  return (
    <ContentBigBlock>
      <ContentMainTextField>
        <TextField
          label={mainLabelValue}
          type="number"
          value={mainFieldValue}
          variant="filled"
          autoFocus={true}
          onChange={handleMainFieldChange}
          fullWidth
        />
      </ContentMainTextField>
      <ContentSmallBlock>
        {!showAllCourses ? defaultContent : allContent}
      </ContentSmallBlock>
      {!showAllCourses ? (
        <Button variant="contained" onClick={handleShowAllCourses}>
          Показать больше
        </Button>
      ) : null}
    </ContentBigBlock>
  );
};

export default Content;
