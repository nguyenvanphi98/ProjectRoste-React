import React from "react";
import * as S from "./styled";
import Box from "../../../common/Box";
import Row from "../../../common/Row";
import { TextSpan } from "../../../common/Text";

import {
  Resto,
  Background,
  Featured_1,
  Featured_2,
  Featured_3,
  Featured_4,
  Gallery_1,
  Gallery_2,
  Gallery_3,
  Gallery_4,
  Gallery_5,
  DeleteIcon,
  EditIcon,
} from "../../../../assets/images";

function index() {
  return (
    <div>
      <S.BackgroundRoste>
        <S.ImageBackground>
          <img src={Background} alt="background-roste" />
        </S.ImageBackground>
        <S.TextTitle>
          <S.Heading2>This Template is awesome</S.Heading2>
          <S.TextContent>
            resto restaurant home page website template
          </S.TextContent>
        </S.TextTitle>
      </S.BackgroundRoste>

      <S.MenuRoste>
        <S.TheMenu>The Menu</S.TheMenu>
        <S.MenuList>
          <S.MenuItem>
            <S.ItemName>
              <S.TextName>Voluptate cillum fugiat.</S.TextName>
              <S.TextSpanName>
                Cheese, tomato, mushrooms, onions.
              </S.TextSpanName>
            </S.ItemName>
            <S.ItemPrice>$50</S.ItemPrice>
          </S.MenuItem>
          <S.MenuItem>
            <S.ItemName>
              <S.TextName>Voluptate cillum fugiat.</S.TextName>
              <S.TextSpanName>
                Cheese, tomato, mushrooms, onions.
              </S.TextSpanName>
            </S.ItemName>
            <S.ItemPrice>$50</S.ItemPrice>
          </S.MenuItem>
          <S.MenuItem>
            <S.ItemName>
              <S.TextName>Voluptate cillum fugiat.</S.TextName>
              <S.TextSpanName>
                Cheese, tomato, mushrooms, onions.
              </S.TextSpanName>
            </S.ItemName>
            <S.ItemPrice>$50</S.ItemPrice>
          </S.MenuItem>
          <S.MenuItem>
            <S.ItemName>
              <S.TextName>Voluptate cillum fugiat.</S.TextName>
              <S.TextSpanName>
                Cheese, tomato, mushrooms, onions.
              </S.TextSpanName>
            </S.ItemName>
            <S.ItemPrice>$50</S.ItemPrice>
          </S.MenuItem>
          <S.MenuItem>
            <S.ItemName>
              <S.TextName>Voluptate cillum fugiat.</S.TextName>
              <S.TextSpanName>
                Cheese, tomato, mushrooms, onions.
              </S.TextSpanName>
            </S.ItemName>
            <S.ItemPrice>$50</S.ItemPrice>
          </S.MenuItem>
          <S.MenuItem>
            <S.ItemName>
              <S.TextName>Voluptate cillum fugiat.</S.TextName>
              <S.TextSpanName>
                Cheese, tomato, mushrooms, onions.
              </S.TextSpanName>
            </S.ItemName>
            <S.ItemPrice>$50</S.ItemPrice>
          </S.MenuItem>
          <S.MenuItem>
            <S.ItemName>
              <S.TextName>Voluptate cillum fugiat.</S.TextName>
              <S.TextSpanName>
                Cheese, tomato, mushrooms, onions.
              </S.TextSpanName>
            </S.ItemName>
            <S.ItemPrice>$50</S.ItemPrice>
          </S.MenuItem>
          <S.MenuItem>
            <S.ItemName>
              <S.TextName>Voluptate cillum fugiat.</S.TextName>
              <S.TextSpanName>
                Cheese, tomato, mushrooms, onions.
              </S.TextSpanName>
            </S.ItemName>
            <S.ItemPrice>$50</S.ItemPrice>
          </S.MenuItem>
        </S.MenuList>
        <S.MenuButton>
          <S.TextButton>load more</S.TextButton>
          <div></div>
          <span></span>
        </S.MenuButton>
      </S.MenuRoste>

      <S.TableRoste>
        <Box padding="0 0 35px">
          <S.Heading1>Table Statistical</S.Heading1>
        </Box>
        <S.Table>
          <S.THead>
            <S.Tr>
              <S.Th width="300">
                <TextSpan size="lsm">Featured</TextSpan>
              </S.Th>
              <S.Th width="250">
                <TextSpan size="lsm">Amount</TextSpan>
              </S.Th>
              <S.Th width="250">
                <TextSpan size="lsm">Price</TextSpan>
              </S.Th>
              <S.Th width="250">
                <TextSpan size="lsm"> Assess</TextSpan>
              </S.Th>
              <S.Th width="250">
                <TextSpan size="lsm">Setting</TextSpan>
              </S.Th>
            </S.Tr>
          </S.THead>
          <S.TBody>
            {[0, 1, 2].map((item) => (
              <S.Tr key={item}>
                <S.Td>
                  <S.FeaturedTable>
                    <Box padding="0 25px 0 0">
                      <S.FeaturedTableImg
                        src={item > 0 ? Featured_1 : Featured_2}
                        alt="img"
                      />
                    </Box>
                    <S.TableText>Pim minim veniam</S.TableText>
                  </S.FeaturedTable>
                </S.Td>
                <S.Td>
                  {item === 1 && (
                    <S.TableText size="lg" isGreen>
                      30
                    </S.TableText>
                  )}
                  {item === 0 && (
                    <S.TableText size="lg" isGreen>
                      20
                    </S.TableText>
                  )}
                  {item === 2 && (
                    <S.TableText size="lg" isRed>
                      5
                    </S.TableText>
                  )}
                </S.Td>
                <S.Td>
                  {item === 1 && (
                    <S.TableText size="lg" isRed>
                      $17
                    </S.TableText>
                  )}
                  {item === 0 && (
                    <S.TableText size="lg" isRed>
                      $18
                    </S.TableText>
                  )}
                  {item === 2 && (
                    <S.TableText size="lg" isRed>
                      $19
                    </S.TableText>
                  )}
                </S.Td>
                <S.Td>
                  {item === 0 && (
                    <S.TableText isGray isGreen>
                      Good
                    </S.TableText>
                  )}
                  {item >= 1 && (
                    <S.TableText isGray isRed>
                      No Good
                    </S.TableText>
                  )}
                </S.Td>
                <S.Td>
                  <Row justifyContent="center">
                    <S.ButtonIcon>
                      <S.SvgIconSetting src={DeleteIcon} />
                    </S.ButtonIcon>
                    <S.ButtonIcon>
                      <S.SvgIconSetting src={EditIcon} />
                    </S.ButtonIcon>
                  </Row>
                </S.Td>
              </S.Tr>
            ))}
          </S.TBody>
        </S.Table>
      </S.TableRoste>

      <S.FeaturedRoste>
        <S.FeaturedName>
          <Box padding="80px 0 0">
            <S.Heading1>Featured dishes</S.Heading1>
          </Box>
        </S.FeaturedName>
        <S.FeatureList>
          <S.FeatureDish>
            <S.FeatureImg src={Featured_1} alt="featured-1" />
            <S.FeatureDescription>
              <S.TextDescription>Pim minim veniam</S.TextDescription>
              <S.DescriptionPrice>$17</S.DescriptionPrice>
            </S.FeatureDescription>
          </S.FeatureDish>
          <S.FeatureDish>
            <S.FeatureImg src={Featured_2} alt="featured-2" />
            <S.FeatureDescription>
              <S.TextDescription>Pim minim veniam</S.TextDescription>
              <S.DescriptionPrice>$17</S.DescriptionPrice>
            </S.FeatureDescription>
          </S.FeatureDish>
          <S.FeatureDish>
            <S.FeatureImg src={Featured_3} alt="featured-3" />
            <S.FeatureDescription>
              <S.TextDescription>Pim minim veniam</S.TextDescription>
              <S.DescriptionPrice>$17</S.DescriptionPrice>
            </S.FeatureDescription>
          </S.FeatureDish>
          <S.FeatureDish>
            <S.FeatureImg src={Featured_4} alt="featured-4" />
            <S.FeatureDescription>
              <S.TextDescription>Pim minim veniam</S.TextDescription>
              <S.DescriptionPrice>$17</S.DescriptionPrice>
            </S.FeatureDescription>
          </S.FeatureDish>
        </S.FeatureList>
      </S.FeaturedRoste>

      <S.GalleryRoste>
        <S.GalleryName>
          <S.Heading1>The Gallery</S.Heading1>
        </S.GalleryName>
        <S.GalleryList>
          <Box>
            <S.GalleryListImg src={Gallery_1} alt="gallery-1" />
            <S.GalleryListImg src={Gallery_5} alt="gallery-5" />
          </Box>
          <Box padding="0 5px">
            <S.GalleryListImg src={Gallery_2} alt="gallery-2" />
            <S.GalleryListImg src={Gallery_3} alt="gallery-3" />
          </Box>
          <Box>
            <S.GalleryListImg src={Gallery_4} alt="gallery-4" />
            <S.GalleryListImg src={Gallery_5} alt="gallery-5" />
          </Box>
        </S.GalleryList>
      </S.GalleryRoste>

      <S.FooterRoste>
        <Box>
          <S.Headding4> New York Restaurant </S.Headding4>
          <S.TextFooter>3926 Anmoore Road </S.TextFooter>
          <S.TextFooter>New York, NY 10014 </S.TextFooter>
          <S.Headding4> 718-749-1714 </S.Headding4>
        </Box>
        <Box>
          <S.Headding4> France Restaurant </S.Headding4>
          <S.TextFooter>68, rue de la Couronne </S.TextFooter>
          <S.TextFooter>75002 PARIS </S.TextFooter>
          <S.Headding4> 02.94.23.69.56 </S.Headding4>
        </Box>
        <Box>
          <S.Headding4> Blog </S.Headding4>
          <S.Headding4>Careers </S.Headding4>
          <S.Headding4>Privacy Policy </S.Headding4>
          <S.Headding4> Contact </S.Headding4>
        </Box>
        <Box padding="20px 0">
          <img src={Resto} alt="resto" />
          <S.TextFooter>© All Rights Reserved 2014. </S.TextFooter>
          <S.TextFooter>Find More at Pixelhint.com</S.TextFooter>
        </Box>
      </S.FooterRoste>
    </div>
  );
}

export default index;
