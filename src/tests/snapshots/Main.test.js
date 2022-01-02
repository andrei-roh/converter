import { shallow } from 'enzyme';
import Main from '../../components/Main';
import store from '../../components/redux/store';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Main store={store} />);
});

describe('<Main /> rendering', () => {
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
