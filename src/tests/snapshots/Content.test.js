import { shallow } from 'enzyme';
import Content from '../../components/Content/Content';
import initialState from '../initialState';

let wrapper;

const { belarusRubleToOther, defaultValue, belarusRuble } = initialState;

beforeEach(() => {
  wrapper = shallow(
    <Content
      belarusRubleToOther={belarusRubleToOther}
      defaultValue={defaultValue}
      belarusRuble={belarusRuble}
    />
  );
});

describe('<Content /> rendering', () => {
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
