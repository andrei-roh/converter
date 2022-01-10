import { EmptyBlock, HeaderBlock } from './style';
import LanguageSelector from './components/LanguageSelector/LanguageSelector';
import EntryField from './components/EntryField/EntryField';
import BankSelector from './components/BankSelector/BankSelector';
import Dark from './components/Dark/Dark';
import { IHeader } from '../../../../types';

const Header: React.FC<IHeader> = ({
  mainLabelValue,
  mainFieldValue,
  handleMainFieldChange,
}) => {
  return (
    <>
      <EmptyBlock />
      <HeaderBlock>
        <LanguageSelector />
        <Dark />
        <EntryField
          mainLabelValue={mainLabelValue}
          mainFieldValue={mainFieldValue}
          handleMainFieldChange={handleMainFieldChange}
        />
        <BankSelector />
      </HeaderBlock>
    </>
  );
};

export default Header;
