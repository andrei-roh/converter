import styled from 'styled-components';
import { Button } from 'components/themes';

export const Changed = styled(Button)`
  color: ${({ theme }) => theme.light} !important;
`;
