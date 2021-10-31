import { EmptyBlock, HeaderBlock } from './style';
import EntryField from './components/EntryField/EntryField';

const Header = ({ mainLabelValue, mainFieldValue, handleMainFieldChange }) => {
  return (
    <>
      <EmptyBlock />
      <HeaderBlock>
        <EntryField
          mainLabelValue={mainLabelValue}
          mainFieldValue={mainFieldValue}
          handleMainFieldChange={handleMainFieldChange}
        />
      </HeaderBlock>
    </>
  );
};

export default Header;
