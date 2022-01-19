import {
  EmptyBlock,
  HeaderBlock,
  IconsBlock,
  MobileSelector,
  DesktopSelector,
} from './style';
import LanguageSelector from './components/LanguageSelector/LanguageSelector';
import EntryField from './components/EntryField/EntryField';
import BankSelector from './components/BankSelector/BankSelector';
import Dark from './components/Dark/Dark';
import { IHeader } from 'types';

const Header: React.FC<IHeader> = ({
  mainLabelValue,
  mainFieldValue,
  handleMainFieldChange,
}) => {
  return (
    <>
      <EmptyBlock />
      <HeaderBlock>
        <IconsBlock>
          <LanguageSelector />
          <Dark />
          <MobileSelector>
            <BankSelector />
          </MobileSelector>
        </IconsBlock>
        <EntryField
          mainLabelValue={mainLabelValue}
          mainFieldValue={mainFieldValue}
          handleMainFieldChange={handleMainFieldChange}
        />
        <DesktopSelector>
          <BankSelector />
        </DesktopSelector>
      </HeaderBlock>
    </>
  );
};

export default Header;
