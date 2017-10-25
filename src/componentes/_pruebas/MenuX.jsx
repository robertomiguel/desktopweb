import React from 'react';
import {List, ListItem} from 'material-ui/List';

export default class ListExampleNested extends React.Component {

  state = {
    open: false,
  };

  handleNestedListToggle = (item) => {
    this.setState({
      open: item.state.open,
    });
  };

  render() {
    return (
        <List>

            <ListItem primaryText="menu 1" />

            <ListItem primaryText="menu 2" />

            <ListItem primaryText="menu 3"
              primaryTogglesNestedList={true}
              nestedItems={[
                <ListItem
                  key={1}
                  primaryText="sub 3.1"
                />,
                <ListItem
                  key={2}
                  primaryText="sub 3.2"
                />,
                <ListItem
                  key={3}
                  primaryText="sub 3.3"
                />,
              ]}
            />
        </List>
    );
  }
}
