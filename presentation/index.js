// Import React
import React from "react";
import styled from 'styled-components';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  CodePane,
  SlideSet,
  Fill,
  Layout,
  Image
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "#1F2022",
  secondary: "white",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} progress="bar" transitionDuration={500} theme={theme}>
        <Slide style={{height: '', maxHeight: '100%'}} className="mySlideStyles" transition={["slide"]} bgColor="primary">
          <Heading size={1} textColor="secondary">
            Getting Started With React Today
          </Heading>
          <hr />
          <Heading size={5} textColor="secondary">
            Austin Willis
          </Heading>
        </Slide>
        <Slide className="mySlideStyles" transition={["slide"]} bgColor="primary">
          <Heading height={200} size={4} textColor="white">What is React?</Heading>
          <Appear order={1}>
            <List textColor="white">
              <ListItem>A <b>library</b> for building user interfaces</ListItem>
              <ListItem>Composable, reusable components</ListItem>
              <ListItem>Declarative</ListItem>
              <ListItem>Portable</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide className="mySlideStyles" transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading height={200} size={4} textColor="white">Why use React?</Heading>
            <Appear order={1}>
            <List margin="0 20%" textColor="white">
              <ListItem>Virtual DOM</ListItem>
              <ListItem>Developer Tools</ListItem>
              <ListItem>Community</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide className="mySlideStyles" transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading height={200} size={4} textColor="white">How does React work?</Heading>
          <Text textColor="white" size={2}>
            A React <b>Component</b> receives <b>properties</b> and <b>children</b> and returns a <b>React Element</b> based on its current state 
          </Text>
        </Slide>
        <Slide height='1000' className="mySlideStyles">
          <Layout>
          <Fill>
            <Text textColor="white" size={2}>React Component (Without JSX)</Text>
            <CodePane
              textSize="20px"
              lang="js"
              source={`class Hello extends React.Component {
  render() {
    return React.createElement('div', null, \`Hello \${this.props.toWhat}\`);
  }
}

ReactDOM.render(
  React.createElement(Hello, {toWhat: 'World'}, null),
  document.getElementById('root')
);`}
              margin="20px auto"
              overflow = "overflow"
            />
            <Text textColor="white" size={2}>React Component (JSX)</Text>
            <CodePane
              textSize="20px"
              lang="js"
              source={`class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.toWhat}</div>;
  }
}

ReactDOM.render(
  <Hello toWhat="World" />,
  document.getElementById('root')
);`}
              margin="20px auto"
              overflow = "overflow"
            />
          </Fill>
          </Layout>
        </Slide>
        <Slide height='1000' className="mySlideStyles" transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading height={200} size={4} textColor="white">React Lifecycle</Heading>
          <CodePane
              textSize="20px"
              lang="js"
              source={`class Hello extends React.Component {
  constructor() {} // 
  componentWillMount() {} // deprecated
  componentDidMount() {}
  componentWillUnmount() {}
  componentDidUnmount() {}
  componentWillReceiveProps(nextProps, prevState) {} // deprecated
  getDerivedStateFromProps(nextProps, prevState) {}

  render() {
    return <h1>Hello</h1>
  }
};`}
              margin="20px auto"
              overflow = "overflow"
          />
        </Slide>
        <Slide height='1000' className="mySlideStyles" transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading height={200} size={4} textColor="white">React State and Conditions</Heading>
          <CodePane
              textSize="20px"
              lang="js"
              source={`class Things extends React.Component {
  state = {
    showThings: false
  }

  toggleShowThings = () => this.setState({ showThings: !this.state.showThings })

  render() {
    return (<div>
      <button onClick={this.toggleShowThings}>
        {this.state.showThings ? 'Hide Things' : 'Show Things'}
      </button>
      {this.state.showThings && <span>
        <p>Things</p>
      </span>}
    </div>)
  }
};`}
              margin="20px auto"
              overflow = "overflow"
          />
        </Slide>
        <Slide height='1000' className="mySlideStyles" transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading height={150} size={4} textColor="white">Don't forget to Bind (or just use arrow functions)</Heading>
          <CodePane
              textSize="20px"
              lang="js"
              source={`class Things extends React.Component {
  constructor() {
    this.state = {
      showThings: false
    }
  }

  toggleShowThings() {
    this.setState({ showThings: !this.state.showThings })
  }

  render() {
    return (<div>
      <button onClick={this.toggleShowThings.bind(this)}>
        {this.state.showThings ? 'Hide Things' : 'Show Things'}
      </button>
      {this.state.showThings && <span>
        <p>Things</p>
      </span>}
    </div>)
  }
};`}
              margin="20px auto"
              height={850}
              overflow = "auto"
          />
        </Slide>
        <Slide className="mySlideStyles" transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading height={200} size={4} textColor="white">Getting Started in an Existing Codebase?</Heading>
          <Appear order={1}>
          <List margin="0 30%" textColor="white">
            <ListItem>Redux</ListItem>
            <ListItem>CSS in JS</ListItem>
            <ListItem>Dev Tools</ListItem>
          </List>
          </Appear>
        </Slide>
        <Slide className="mySlideStyles" transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading height={200} size={4} textColor="white">What is Redux?</Heading>
          <Appear>
          <List margin="0 30%" textColor="white">
            <Appear><ListItem>Flux Architecture for React</ListItem></Appear>
            <Appear><ListItem><Image src="https://raw.githubusercontent.com/lgvalle/lgvalle.github.io/master/public/images/flux-graph-simple.png"/></ListItem></Appear>
          </List>
          </Appear>
        </Slide>
        <Slide className="mySlideStyles">
          <Heading height={200} size={2} textColor="white">React Router</Heading>
        </Slide>
        <Slide className="mySlideStyles" transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading height={200} size={4} textColor="white">React Lifecycle Continued</Heading>
          <Image src="https://pbs.twimg.com/media/DZ-97vzW4AAbcZj.jpg:large" />
        </Slide>
      </Deck>
    );
  }
}
