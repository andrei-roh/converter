import Loader from 'react-loader-spinner';
import { Edge, Wheel } from './style';

const Spinner = () => {
  return (
    <Edge>
      <Wheel>
        <Loader type="Oval" color="#3f51b5" height={250} width={250} />
      </Wheel>
    </Edge>
  );
};

export default Spinner;
