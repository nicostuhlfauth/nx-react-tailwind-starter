import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ButtonProps {
  value: string;
}

/* const StyledButton = styled.div`
  color: pink;
`; */

const StyledButton = styled.button.attrs({
  className:
    'py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75',
})`
  & {
  }
`;

export function Button(props: ButtonProps) {
  const { value } = props;
  return (
    <StyledButton>
      <button>{value}</button>
    </StyledButton>
  );
}

export default Button;
