import { shallow } from 'enzyme';
import Content from '../../components/Content/Content';
import initialState from '../initialState';

let wrapper;

const { currencyRates, defaultValue, rouble } = initialState;

beforeEach(() => {
  wrapper = shallow(
    <Content
      currencyRates={currencyRates}
      defaultValue={defaultValue}
      rouble={rouble}
    />
  );
});

describe('<Content /> rendering', () => {
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
