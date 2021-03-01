import styled from "styled-components";

export const DashboardSettingsContainer = styled.div`
  flex: 1;
  position: relative;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.borderGray};
  border-left: 1px solid ${({ theme }) => theme.colors.borderGray};
  border-right: 1px solid ${({ theme }) => theme.colors.borderGray};
`;

export const Brand = styled.div`
  padding: 20px 100px;

  img {
    cursor: pointer;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 100%;
  overflow-x: auto;
  height: 70px;
  padding-right: 70px;
`;

export const MenuItem = styled.button`
  border: none;
  font-size: 16px;
  cursor: pointer;
  padding: 0 20px;
  margin-left: 10px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.gray};
  outline: none;

  &:hover {
    color: ${({ theme }) => theme.colors.active};
  }

  &.active {
    box-shadow: inset 0px -2px 0px 0px ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.active};
  }
`;
