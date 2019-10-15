import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Image, Dropdown, Icon, Grid, GridColumn, GridRow, Item } from 'semantic-ui-react';

class TopMenu extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    return (
        <Menu
        borderless
        className="ui borderless topmenu container menu">
          <Menu.Item
              name='logo'
              active={activeItem === 'logo'}
              onClick={this.handleItemClick}>
            <Image src="http://murphyshawaii.com/media/2014/04/murphyshawaii.png" class="ui image item" />
          </Menu.Item>
          <Menu.Item
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
              className="right item">
            Home
          </Menu.Item>
          <Dropdown item text="About us">
            <Dropdown.Menu>
              <Dropdown.Item>ABOUT US</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item
              name='day'
              active={activeItem === 'day'}
              onClick={this.handleItemClick}>
            St. Patrick's Day
          </Menu.Item>
          <Dropdown item text="Menus">
            <Dropdown.Menu>
              <Dropdown.Item>MENU</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item
              name='bar'
              active={activeItem === 'bar'}
              onClick={this.handleItemClick}>
            Bar
          </Menu.Item>
          <Menu.Item
              name='search'
              active={activeItem === 'search'}
              onClick={this.handleItemClick}>
            <Icon className="search"/>
          </Menu.Item>
        </Menu>
    )
  }
}

class Middle extends React.Component {
  render() {
    return (
        <div
        className="middle-background">
          <Container
            className="ui main">
          <Grid columns={2} divide>
            <Grid.Row>
              <Grid.Column>
                <Image src="http://murphyshawaii.com/media/2014/04/murphyshawaiilogo.png" class ="ui image item"/>
              </Grid.Column>
              <Grid.Column>
                <Item.Description
                  className="main-text">
                  A traditional downtown saloon and eatery located in the Honolulu Financial District,
                  just one block off the waterfront, Murphy's has been a haven for mariners, businessmen and locals since
                  1891.
                </Item.Description>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          </Container>
        </div>
    )
  }
}

class Footer extends React.Component {
  render() {
    return (
        <div class = "footer">
          <Container>
      <Grid columns={3} divide>
        <Grid.Row>
          <Grid.Column>
            <Item.Description
            className="bottom-text">
              Lunch
            </Item.Description>
            <hr />
            <Item.Description
            className="bottom-text">
              Monday - Friday: 11:00am - 2:30pm
            </Item.Description>
            <Item.Description
                className="bottom-text">
              Saturday-Sunday: Not open for lunch
            </Item.Description>
          </Grid.Column>
          <Grid.Column>
            <Item.Description
                className="bottom-text">
              Bar
            </Item.Description>
            <hr />
            <Item.Description
                className="bottom-text">
              Monday - Friday from 11:00am
            </Item.Description>
            <Item.Description
                className="bottom-text">
              Saturday - Sunday from 4:00pm
            </Item.Description>
          </Grid.Column>
          <Grid.Column>
          <Item.Description
              className="bottom-text">
            Dinner
          </Item.Description>
          <hr />
          <Item.Description
              className="bottom-text">
            Monday - Saturday: 5:30pm - 10:00pm
          </Item.Description>
          <Item.Description
              className="bottom-text">
            Sunday: 5:00pm - 9:00pm
          </Item.Description>
        </Grid.Column>
        </Grid.Row>
      </Grid>
          </Container>
        </div>
    )
  }
}

class Murphys extends React.Component {
  render() {
    return (
        <div>
    <TopMenu/>
    <Middle/>
        <Footer/>
            </div>
  );
  }
}

ReactDOM.render(<Murphys/>, document.getElementById('root'));