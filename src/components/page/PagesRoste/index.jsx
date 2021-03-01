import React from "react";
import * as S from "./styled";
import { TabContent, TabPane } from "reactstrap";
import classnames from "classnames";
import Row from "../../common/Row";

import OurStory from "./OurStory";

import { Resto } from "../../../assets/images";

const menuList = [
  {
    title: "Our story",
  },
  {
    title: "Menu",
  },
  {
    title: "reservation",
  },
  {
    title: "News",
  },
  {
    title: "Reviews",
  },
];

class DashboardSettings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "0",
    };
  }

  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  };

  render() {
    return (
      <S.DashboardSettingsContainer>
        <Row justifyContent="space-between">
          <S.Brand>
            <img src={Resto} alt="resto" />
          </S.Brand>
          <S.Menu>
            {menuList.map((item, index) => (
              <S.MenuItem
                key={index}
                className={classnames({
                  active: this.state.activeTab === `${index}`,
                })}
                onClick={() => {
                  this.toggle(`${index}`);
                }}
              >
                <span>{item.title}</span>
              </S.MenuItem>
            ))}
          </S.Menu>
        </Row>

        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="0">
            <OurStory />
          </TabPane>
        </TabContent>
      </S.DashboardSettingsContainer>
    );
  }
}

export default DashboardSettings;
