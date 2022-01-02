import React from 'react';
import { connect } from 'react-redux';
import { Language } from '@material-ui/icons';
import {
  fetchMenuOpen,
  fetchMenuClose,
  fetchChangeLanguage,
} from '../../../../../redux/actions';
import {
  LanguageIconButton,
  LanguageMenu,
  LanguageMenuItem,
  LanguageLocale,
} from './style';
import i18n from '../../../../../../i18n';
import { useTranslation } from 'react-i18next';
import { ILanguageSelector, State } from '../../../../../../types';

const LanguageSelector: React.FC<ILanguageSelector> = ({
  anchorMenu,
  onfetchMenuOpen,
  onfetchMenuClose,
  language,
  onfetchChangeLanguage,
}) => {
  const { t } = useTranslation();
  const openLanguageMenu = Boolean(anchorMenu);
  const handleOpenLanguageMenu = (element: any) => {
    onfetchMenuOpen(element.currentTarget);
  };
  const chooseLanguage = (element: any) => {
    onfetchMenuClose(anchorMenu);
    onfetchChangeLanguage(element.target.id);
    i18n.changeLanguage(element.target.id);
  };
  return (
    <>
      <LanguageIconButton
        id="language-button"
        title={t('changeLanguage')}
        aria-controls="language-menu"
        aria-haspopup="true"
        aria-expanded={openLanguageMenu ? 'true' : undefined}
        onClick={handleOpenLanguageMenu}
      >
        <Language />
        <LanguageLocale>{language}</LanguageLocale>
      </LanguageIconButton>
      <LanguageMenu
        id="language-menu"
        variant="selectedMenu"
        anchorEl={anchorMenu}
        open={openLanguageMenu}
        onClose={onfetchMenuClose}
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
  anchorMenu: state.anchorMenu,
  language: state.language,
});

const mapDispatchToProps = (dispatch: any) => ({
  onfetchMenuOpen: (currentTarget: any) =>
    dispatch(fetchMenuOpen(currentTarget)),
  onfetchMenuClose: (anchorMenu: null | HTMLElement) =>
    dispatch(fetchMenuClose(anchorMenu)),
  onfetchChangeLanguage: (language: string) =>
    dispatch(fetchChangeLanguage(language)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelector);