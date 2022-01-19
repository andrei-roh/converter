import Loader from 'react-loader-spinner';
import { Edge, Mistake, Phrase } from './style';
import { IError } from 'types';

const Error: React.FC<IError> = ({ error }) => {
  return (
    <Edge>
      <Mistake>
        <Loader type="Grid" color="#e75f5f" height={250} width={250} />
        <Phrase>{error}</Phrase>
      </Mistake>
    </Edge>
  );
};

export default Error;
