import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import TableField from './components/TableField/TableField';
import Footer from './components/Footer/Footer';
import getExchangeRates from './utils/getExchangeRates';
import getFormatNumber from './utils/getFormatNumber';
import { Full, Starter, More } from './style';
import { useTranslation } from 'react-i18next';
import { IContent, Currency, SyntheticEvent } from 'types';

const Content: React.FC<IContent> = ({
  defaultValue,
  rouble,
  currencyRates,
}) => {
  const minElementsForShowingMore = 3;
  const { t } = useTranslation();
  const [showAllCourses, setShowAllCourses] = useState(false);
  const handleShowAllCourses = () => {
    setShowAllCourses(!showAllCourses);
  };
  const [mainFieldValue, setMainFieldValue] = useState<number>(
    rouble.Cur_OfficialRate
  );
  const handleMainFieldChange = (element: SyntheticEvent) => {
    const maxPlaces = 6;
    if (element.target.value.length > maxPlaces) return;
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

  const exchangeMainField = (
    label: string,
    value: number,
    id: number,
    currentMainId: number
  ) => {
    setMainLabelValue(label);
    setMainFieldValue(value);
    getExchangeRates(id, setCurrentMainId, currencyRates, currentMainId);
  };

  const Content = (full: boolean) => {
    return Object.values(currencyRates)
      .filter((element: Currency) => {
        return full ? element : defaultValue.includes(element.Cur_ID);
      })
      .map((element: Currency) => {
        const rate = getFormatNumber(
          (element.Cur_Scale / element.Cur_OfficialRate) * mainFieldValue
        );
        return element.Cur_ID !== currentMainId ? (
          <TableField
            key={element.Cur_ID}
            element={element}
            rate={rate}
            exchangeMainField={exchangeMainField}
            showScrollButton={showScrollButton}
            currentMainId={currentMainId}
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
      {!showAllCourses && Content(true).length > minElementsForShowingMore ? (
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
