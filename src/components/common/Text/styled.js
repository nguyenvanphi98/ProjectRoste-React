import styled, { css } from "styled-components";

export const TextSpan = styled.span`
  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}

  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}
`;

export const Text = styled.p`
  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}

  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}
`;
