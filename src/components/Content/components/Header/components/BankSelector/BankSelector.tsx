import React from 'react';
import { connect } from 'react-redux';
import { AccountBalance } from '@material-ui/icons';
import {
  fetchBankMenuOpen,
  fetchBankMenuClose,
  fetchChangeBank,
  fetchChangeEndpoint,
} from '../../../../../redux/actions';
import { BankIconButton, BankMenu, BankMenuItem, BankLocale } from './style';
import { useTranslation } from 'react-i18next';
import { IBankSelector, State } from '../../../../../../types';
import { endpoints } from '../../../../../../endpoints';

const BankSelector: React.FC<IBankSelector> = ({
  anchorBankMenu,
  onfetchBankMenuOpen,
  onfetchBankMenuClose,
  bank,
  onfetchChangeBank,
  onfetchChangeEndpoint,
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
    let endpoint = getEndpointLink(element.target.id);
    onfetchBankMenuClose(anchorBankMenu);
    onfetchChangeBank(element.target.id);
    onfetchChangeEndpoint(endpoint);
  };
  return (
    <>
      <BankIconButton
        id="bank-button"
        title={t('changeBank')}
        aria-controls="bank-menu"
        aria-haspopup="true"
        aria-expanded={openBankMenu ? 'true' : undefined}
        onClick={handleOpenBankMenu}
      >
        <AccountBalance />
        <BankLocale>{t(bank)}</BankLocale>
      </BankIconButton>
      <BankMenu
        id="bank-menu"
        anchorEl={anchorBankMenu}
        open={openBankMenu}
        onClose={onfetchBankMenuClose}
        disableScrollLock={true}
        MenuListProps={{
          'aria-labelledby': 'bank-button',
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
  endpoint: state.endpoint,
});

const mapDispatchToProps = (dispatch: any) => ({
  onfetchBankMenuOpen: (currentTarget: any) =>
    dispatch(fetchBankMenuOpen(currentTarget)),
  onfetchBankMenuClose: (anchorBankMenu: null | HTMLElement) =>
    dispatch(fetchBankMenuClose(anchorBankMenu)),
  onfetchChangeBank: (bank: string) => dispatch(fetchChangeBank(bank)),
  onfetchChangeEndpoint: (endpoint: string) =>
    dispatch(fetchChangeEndpoint(endpoint)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BankSelector);
