import { shallow } from 'enzyme';
import Header from '../../components/Content/components/Header/Header';
import initialState from '../initialState';

let wrapper;

const { belarusRuble } = initialState;

beforeEach(() => {
  wrapper = shallow(
    <Header
      mainLabelValue={belarusRuble.Cur_OfficialRate}
      mainFieldValue={belarusRuble.Cur_Name}
      handleMainFieldChange={null}
    />
  );
});

describe('<Header /> rendering', () => {
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
