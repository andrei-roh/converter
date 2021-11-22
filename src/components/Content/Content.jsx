import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import TableField from './components/TableField/TableField';
import createOtherRate from './utils/createOtherRate';
import getRate from './utils/getRate';
import { BigBlock, SmallBlock, More } from './style';
import { useTranslation } from 'react-i18next';

const Content = ({ defaultValue, belarusRuble, belarusRubleToOther }) => {
  const { t } = useTranslation();
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
  const [showScrollButton, setShowScrollButton] = useState(false);
  const handleShowScrollButton = () => {
    if (window.pageYOffset !== 0) return setShowScrollButton(true);
    return setShowScrollButton(false);
  };

  const cleanScrollListener = () => {
    return window.removeEventListener('scroll', handleShowScrollButton);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleShowScrollButton);
    return cleanScrollListener;
  });

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
        showScrollButton={showScrollButton}
      />
    ) : null;
  });
  return (
    <BigBlock>
      <Header
        mainLabelValue={mainLabelValue}
        mainFieldValue={mainFieldValue}
        handleMainFieldChange={handleMainFieldChange}
      />
      <SmallBlock>{!showAllCourses ? defaultContent : allContent}</SmallBlock>
      {!showAllCourses ? (
        <More variant="contained" onClick={handleShowAllCourses}>
          {t('showMore')}
        </More>
      ) : null}
    </BigBlock>
  );
};

export default Content;
