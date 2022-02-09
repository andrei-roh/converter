import React from 'react';
import { connect } from 'react-redux';
import { Language } from '@material-ui/icons';
import {
  fetchLanguageMenuOpen,
  fetchLanguageMenuClose,
  fetchChangeLanguage,
} from 'components/redux/actions';
import { LanguageMenu, LanguageMenuItem, LanguageLocale } from './style';
import { Button } from 'components/themes';
import i18n from 'i18n';
import { useTranslation } from 'react-i18next';
import { ILanguageSelector, State } from 'types';

const LanguageSelector: React.FC<ILanguageSelector> = ({
  anchorLanguageMenu,
  onfetchLanguageMenuOpen,
  onfetchLanguageMenuClose,
  language,
  onfetchChangeLanguage,
}) => {
  const { t } = useTranslation();
  const openLanguageMenu = Boolean(anchorLanguageMenu);
  const handleOpenLanguageMenu = (element: any) => {
    onfetchLanguageMenuOpen(element.currentTarget);
  };
  const chooseLanguage = (element: any) => {
    onfetchLanguageMenuClose(anchorLanguageMenu);
    onfetchChangeLanguage(element.target.id);
    i18n.changeLanguage(element.target.id);
  };
  return (
    <>
      <Button
        id="language-button"
        title={t('changeLanguage')}
        aria-labelledby={t('changeLanguage')}
        aria-controls="language-menu"
        aria-haspopup="true"
        aria-expanded={openLanguageMenu ? 'true' : undefined}
        onClick={handleOpenLanguageMenu}
      >
        <Language />
        <LanguageLocale>{language}</LanguageLocale>
      </Button>
      <LanguageMenu
        id="language-menu"
        variant="selectedMenu"
        anchorEl={anchorLanguageMenu}
        open={openLanguageMenu}
        onClose={onfetchLanguageMenuClose}
        disableScrollLock={true}
        MenuListProps={{
          'aria-labelledby': 'language-button',
        }}
      >
        {Object.keys(i18n.store.data).map((element, index) => (
          <LanguageMenuItem
            key={element}
            id={element}
            selected={language === element}
            onClick={(event) => chooseLanguage(event)}
          >
            {element.toUpperCase()}
          </LanguageMenuItem>
        ))}
      </LanguageMenu>
    </>
  );
};

const mapStateToProps = (state: State) => ({
  anchorLanguageMenu: state.anchorLanguageMenu,
  language: state.language,
});

const mapDispatchToProps = (dispatch: any) => ({
  onfetchLanguageMenuOpen: (currentTarget: any) =>
    dispatch(fetchLanguageMenuOpen(currentTarget)),
  onfetchLanguageMenuClose: (anchorLanguageMenu: null | HTMLElement) =>
    dispatch(fetchLanguageMenuClose(anchorLanguageMenu)),
  onfetchChangeLanguage: (language: string) =>
    dispatch(fetchChangeLanguage(language)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelector);
