import React from 'react';
import { connect } from 'react-redux';
import {
  fetchBankMenuOpen,
  fetchBankMenuClose,
  fetchChangeBank,
} from '../../../../../redux/actions';
import { BankIconButton, BankMenu, BankMenuItem } from './style';
import { useTranslation } from 'react-i18next';
import { IBankSelector, State } from '../../../../../../types';
import { endpoints } from '../../../../../../endpoints';

const BankSelector: React.FC<IBankSelector> = ({
  anchorBankMenu,
  onfetchBankMenuOpen,
  onfetchBankMenuClose,
  bank,
  onfetchChangeBank,
}) => {
  const { t } = useTranslation();
  const openBankMenu = Boolean(anchorBankMenu);
  const handleOpenBankMenu = (element: any) => {
    onfetchBankMenuOpen(element.currentTarget);
  };
  const getEndpointLink = (elementId: string) => {
    const result = Object.values(endpoints).filter(
      (element: any) => element.name === elementId
    );
    return result[0].url;
  };
  const chooseBank = (element: any) => {
    onfetchBankMenuClose(anchorBankMenu);
    onfetchChangeBank(element.target.id, getEndpointLink(element.target.id));
  };
  return (
    <>
      <BankIconButton
        id="language-button"
        title={t('changeLanguage')}
        aria-controls="language-menu"
        aria-haspopup="true"
        aria-expanded={openBankMenu ? 'true' : undefined}
        onClick={handleOpenBankMenu}
      >
        {t(`${bank}`)}
      </BankIconButton>
      <BankMenu
        id="language-menu"
        variant="selectedMenu"
        anchorEl={anchorBankMenu}
        open={openBankMenu}
        onClose={onfetchBankMenuClose}
        disableScrollLock={true}
        MenuListProps={{
          'aria-labelledby': 'language-button',
        }}
      >
        {Object.keys(endpoints).map((element, index) => (
          <BankMenuItem
            key={element}
            id={element}
            selected={bank === element}
            onClick={(event) => chooseBank(event)}
          >
            {t(`${element}`)}
          </BankMenuItem>
        ))}
      </BankMenu>
    </>
  );
};

const mapStateToProps = (state: State) => ({
  anchorBankMenu: state.anchorBankMenu,
  bank: state.bank,
});

const mapDispatchToProps = (dispatch: any) => ({
  onfetchBankMenuOpen: (currentTarget: any) =>
    dispatch(fetchBankMenuOpen(currentTarget)),
  onfetchBankMenuClose: (anchorBankMenu: null | HTMLElement) =>
    dispatch(fetchBankMenuClose(anchorBankMenu)),
  onfetchChangeBank: (bank: string, endpoint: string) =>
    dispatch(fetchChangeBank(bank, endpoint)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BankSelector);
