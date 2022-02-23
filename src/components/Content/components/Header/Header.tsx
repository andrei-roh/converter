import { HeaderBlock } from './style';
import LanguageSelector from './components/LanguageSelector/LanguageSelector';
import EntryField from './components/EntryField/EntryField';
import BankSelector from './components/BankSelector/BankSelector';
import Dark from './components/Dark/Dark';
import { IHeader } from 'types';

const Header: React.FC<IHeader> = ({
  mainLabelValue,
  mainFieldValue,
  currentMainId,
  handleMainFieldChange,
}) => {
  return (
    <HeaderBlock>
      <LanguageSelector />
      <Dark />
      <BankSelector />
      <EntryField
        mainLabelValue={mainLabelValue}
        mainFieldValue={mainFieldValue}
        currentMainId={currentMainId}
        handleMainFieldChange={handleMainFieldChange}
      />
    </HeaderBlock>
  );
};

export default Header;
