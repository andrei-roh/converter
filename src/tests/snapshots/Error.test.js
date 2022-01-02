import { shallow } from 'enzyme';
import Error from '../../components/Error/Error';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Error />);
});

describe('<Error /> rendering', () => {
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
