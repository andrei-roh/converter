import { shallow } from 'enzyme';
import Footer from '../../components/Content/components/Footer/Footer';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Footer />);
});

describe('<Footer /> rendering', () => {
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
