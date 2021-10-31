import { EmptyBlock, HeaderBlock, EmptyElement } from './style';
import Dark from './components/Dark/Dark';
import EntryField from './components/EntryField/EntryField';

const Header = ({
  mainLabelValue,
  mainFieldValue,
  handleMainFieldChange,
  showDark,
  handleShowDark,
}) => {
  return (
    <>
      <EmptyBlock />
      <HeaderBlock>
        <Dark showDark={showDark} handleShowDark={handleShowDark} />
        <EntryField
          mainLabelValue={mainLabelValue}
          mainFieldValue={mainFieldValue}
          handleMainFieldChange={handleMainFieldChange}
        />
        <EmptyElement />
      </HeaderBlock>
    </>
  );
};

export default Header;
