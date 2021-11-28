import { EmptyBlock, HeaderBlock } from './style';
import LanguageSelector from './components/LanguageSelector/LanguageSelector';
import EntryField from './components/EntryField/EntryField';
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
        <EntryField
          mainLabelValue={mainLabelValue}
          mainFieldValue={mainFieldValue}
          handleMainFieldChange={handleMainFieldChange}
        />
        <Dark />
      </HeaderBlock>
    </>
  );
};

export default Header;
