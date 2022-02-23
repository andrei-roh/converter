import { shallow } from 'enzyme';
import Header from '../../components/Content/components/Header/Header';
import initialState from '../initialState';

let wrapper;

const { rouble } = initialState;

beforeEach(() => {
  wrapper = shallow(
    <Header
      mainLabelValue={rouble.Cur_OfficialRate}
      mainFieldValue={rouble.Cur_Name}
      handleMainFieldChange={null}
    />
  );
});

describe('<Header /> rendering', () => {
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
