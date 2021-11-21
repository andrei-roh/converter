import React from 'react';
import { connect } from 'react-redux';
import { Language } from '@material-ui/icons';
import { fetchMenuOpen, fetchMenuClose } from '../../../../../redux/actions';
import { LanguageIconButton, LanguageMenu, LanguageMenuItem } from './style';

const LanguageSelector = ({
  anchorMenu,
  onfetchMenuOpen,
  onfetchMenuClose,
}) => {
  const openLanguageMenu = Boolean(anchorMenu);
  const handleOpenLanguageMenu = (element) => {
    onfetchMenuOpen(element.currentTarget);
  };
  return (
    <div>
      <LanguageIconButton
        id="language-button"
        aria-controls="language-menu"
        aria-haspopup="true"
        aria-expanded={openLanguageMenu ? 'true' : undefined}
        onClick={handleOpenLanguageMenu}
      >
        <Language />
      </LanguageIconButton>
      <LanguageMenu
        id="language-menu"
        anchorEl={anchorMenu}
        open={openLanguageMenu}
        onClose={onfetchMenuClose}
        MenuListProps={{
          'aria-labelledby': 'language-button',
        }}
      >
        <LanguageMenuItem onClick={onfetchMenuClose}>EN</LanguageMenuItem>
        <LanguageMenuItem onClick={onfetchMenuClose}>RU</LanguageMenuItem>
      </LanguageMenu>
    </div>
  );
};

const mapStateToProps = (state) => ({
  anchorMenu: state.anchorMenu,
});

const mapDispatchToProps = (dispatch) => ({
  onfetchMenuOpen: (currentTarget) => dispatch(fetchMenuOpen(currentTarget)),
  onfetchMenuClose: () => dispatch(fetchMenuClose()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelector);
