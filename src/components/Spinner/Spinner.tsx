import Loader from 'react-loader-spinner';
import { BigBlock, SmallBlock } from './style';

const Spinner = () => {
  return (
    <BigBlock>
      <SmallBlock>
        <Loader type="Oval" color="#3f51b5" height={250} width={250} />
      </SmallBlock>
    </BigBlock>
  );
};

export default Spinner;
