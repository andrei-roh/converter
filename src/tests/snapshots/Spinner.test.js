import { shallow } from 'enzyme';
import Spinner from '../../components/Spinner/Spinner';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Spinner />);
});

describe('<Spinner /> rendering', () => {
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
