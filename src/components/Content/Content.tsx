import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import TableField from './components/TableField/TableField';
import Footer from './components/Footer/Footer';
import createOtherRate from './utils/createOtherRate';
import getRate from './utils/getRate';
import { Full, Starter, More } from './style';
import { useTranslation } from 'react-i18next';
import { IContent } from 'types';

const Content: React.FC<IContent> = ({
  defaultValue,
  rouble,
  currencyRates,
}) => {
  const { t } = useTranslation();
  const [showBelarusRubleRate, setShowBelarusRubleRate] = useState(false);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const handleShowAllCourses = () => {
    setShowAllCourses(!showAllCourses);
  };
  const [mainFieldValue, setMainFieldValue] = useState<number>(
    rouble.Cur_OfficialRate
  );
  const handleMainFieldChange = (element: any) => {
    if (element.target.value.length > 9) return;
    setMainFieldValue(element.target.value);
  };
  const [currentMainId, setCurrentMainId] = useState(rouble.Cur_ID);
  const [mainLabelValue, setMainLabelValue] = useState(rouble.Cur_Name);
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

  const exchangeMainField = (label: string, value: number, id: number) => {
    setMainLabelValue(label);
    setMainFieldValue(value);
    id !== rouble.Cur_ID
      ? setShowBelarusRubleRate(true)
      : setShowBelarusRubleRate(false);
    createOtherRate(id, setCurrentMainId, otherCurrencyRateToOther);
  };

  const otherCurrencyRateToOther = Object.values(currencyRates).concat(rouble);

  const Content = (full: boolean) => {
    return Object.values(
      getRate(showBelarusRubleRate, currencyRates, otherCurrencyRateToOther)
    )
      .filter((element: any) => {
        return full ? element : defaultValue.includes(element.Cur_ID);
      })
      .map((element: any) => {
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
  };

  return (
    <Full>
      <Header
        mainLabelValue={mainLabelValue}
        mainFieldValue={mainFieldValue}
        currentMainId={currentMainId}
        handleMainFieldChange={handleMainFieldChange}
      />
      <Starter>{!showAllCourses ? Content(false) : Content(true)}</Starter>
      {!showAllCourses && Content(true).length > 3 ? (
        <More
          variant="contained"
          onClick={handleShowAllCourses}
          title={t('showMore')}
        >
          {t('showMore')}
        </More>
      ) : (
        <Footer />
      )}
    </Full>
  );
};

export default Content;
