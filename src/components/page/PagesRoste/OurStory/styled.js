import styled from "styled-components";
import Box from "../../../common/Box";
import Row from "../../../common/Row";
import { Text, TextSpan } from "../../../common/Text";
import SVG from "react-inlinesvg";

export const BackgroundRoste = styled.div`
  color: white;
  width: 100%;
  height: 570px;
  position: relative;
  overflow: hidden;
`;

export const ImageBackground = styled(Box)`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: transform 0.9s ease;
  width: 100%;
  height: 100%;

  &:hover {
    transform: scale(1.5);
  }
`;

export const TextTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const TextContent = styled(Text)`
  font-size: 16px;
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  &::before,
  &::after {
    content: "";
    background-color: ${({ theme }) => theme.colors.white};
    width: 40px;
    height: 1px;
    position: absolute;
    top: 10px;
  }

  &::before {
    left: 55px;
  }

  &::after {
    right: 55px;
  }
`;

export const Heading2 = styled.div`
  font-size: 50px;
  margin-bottom: 30px;
`;

export const MenuRoste = styled(Row)`
  align-items: center;
  flex-direction: column;
  margin-bottom: 80px;
`;
export const TheMenu = styled.div`
  width: 155px;
  height: 45px;
  background-color: #f45a5a;
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 1px;
  font-size: 20px;
  text-align: center;
  padding-top: 15px;

  &::after {
    content: "";
    left: 0;
    bottom: 0;
    position: absolute;
    border-bottom: 12px solid ${({ theme }) => theme.colors.white};
  }
`;

export const MenuList = styled(Row)`
  flex-wrap: wrap;
  padding: 50px 150px;
`;

export const MenuItem = styled(Row)`
  width: 50%;
  justify-content: space-between;
  margin-bottom: 40px;
`;
export const ItemName = styled.div``;

export const ItemPrice = styled.div`
  padding: 20px 60px;
  position: relative;

  &::before {
    content: "";
    background-color: ${({ theme }) => theme.colors.gray};
    width: 70px;
    height: 1px;
    left: -30px;
    top: 30px;

    position: absolute;

    &::before {
      left: 55px;
    }
  }
`;

export const TextName = styled(Text)`
  font-weight: 600;
`;

export const TextSpanName = styled(TextSpan)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray};
`;

export const MenuButton = styled.div`
  font-size: 14px;
  padding: 10px;
  border: solid 1px #d7d5d5;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray};
  display: flex;
  align-items: center;
  cursor: pointer;

  > div:nth-child(2) {
    width: 1px;
    height: 10px;
    background-color: ${({ theme }) => theme.colors.gray};
    margin: 0 12px;
  }

  > span {
    border-style: solid;
    border-width: 1px 1px 0 0;
    padding: 4px;
    transform: rotate(135deg);
    display: block;
    margin-top: -5px;
  }
`;

export const TextButton = styled.text`
  color: ${({ theme }) => theme.colors.gray};
`;

export const FeaturedRoste = styled.div`
  padding: 0 150px;
  margin-bottom: 70px;
`;

export const FeaturedName = styled(Row)`
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;

export const Heading1 = styled.h2`
  text-transform: uppercase;
  position: relative;

  &::after {
    content: "";
    background-color: ${({ theme }) => theme.colors.gray};
    width: 200px;
    height: 1px;
    position: absolute;
    top: 12px;
    left: 250px;
  }
`;

export const FeatureList = styled(Row)`
  justify-content: space-between;
`;

export const FeatureImg = styled.img`
  width: 100%;
  transition: all 0.3s;
  object-fit: cover;
  height: 132px;

  &:hover {
    transform: scale(1.1);
    box-shadow: 1px 1px 1.5px 2px red;
  }
`;

export const FeatureDescription = styled(Row)`
  justify-content: space-between;
  color: #555555;
`;

export const FeatureDish = styled(Box)`
  width: calc(25% - 40px);
`;

export const TextDescription = styled(Text)`
  color: ${({ theme }) => theme.colors.gray};
`;

export const DescriptionPrice = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  padding: 20px 0;
`;

export const GalleryRoste = styled.div`
  padding: 0 150px;
  margin-bottom: 50px;
`;

export const GalleryName = styled.div`
  margin-bottom: 70px;
`;

export const GalleryList = styled(Row)``;

export const GalleryListImg = styled.img`
  width: 100%;
  object-fit: cover;
  height: 180px;
  transition: all 0.3s;

  :hover {
    transform: scale(1.1);
  }
`;

export const FooterRoste = styled(Row)`
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 100px 200px;
  color: ${({ theme }) => theme.colors.white};
  justify-content: space-between;
`;

export const Headding4 = styled.h4``;

export const TextFooter = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
`;

export const TableRoste = styled(Box)`
  padding: 0 150px;
`;

export const FeaturedTableImg = styled.img`
  width: 35px;
  height: 35px;
`;

export const FeaturedTable = styled(Row)`
  align-items: center;
`;

export const Table = styled.table`
  border: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const TableText = styled(TextSpan)`
  display: flex;
  justify-content: center;
  font-size: 14px;
`;

export const THead = styled.thead``;

export const Tr = styled.tr``;

export const TBody = styled.tbody``;

export const Td = styled.td`
  padding: 20px 30px;
`;

export const Th = styled.th`
  padding: 22px 30px;
  span {
    font-weight: 600;
  }
`;

export const ButtonIcon = styled.div`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.borderGray};
  }
`;

export const SvgIconSetting = styled(SVG)`
  svg {
    height: 15px;
    width: 15px;
  }
`;
