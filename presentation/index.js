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
        <Slide height='100vh' className="mySlideStyles" transition={["slide"]} bgColor="quarternary" overflowy="scroll">
          <Heading size={2} textColor="primary">
            STL React Meetup Group
          </Heading>
          <Heading size={3} textColor="primary">
            Speakers Wanted!
          </Heading>
          <hr color="black" />
          <Heading size={4} textColor="secondary">
            <a color="white" href="https://github.com/austinwillis/stl-react-meetup">Propose a Talk!</a>
          </Heading>
        </Slide>
        <Slide height='100vh' className="mySlideStyles" transition={["slide"]} bgColor="primary" overflowy="scroll">
          <Heading size={6} textColor="secondary">
          </Heading>
          <Heading size={1} textColor="secondary">
            Getting Started With React Today
          </Heading>
          <hr />
          <Heading size={5} textColor="secondary">
            Austin Willis
          </Heading>
        </Slide>
        <Slide className="mySlideStyles" transition={["slide"]} bgColor="primary" textColor="tertiary" overflowy="scroll">
          <Heading height={200} size={4} textColor="white">Agenda</Heading>
          <List margin="0 20%" textColor="white">
            <ListItem>React Basics</ListItem>
            <ListItem>React Lifecycle</ListItem>
            <ListItem>React Dev Tool</ListItem>            
            <ListItem>Redux</ListItem>
            <ListItem>Redux Dev Tool</ListItem>
            <ListItem>Project Creators</ListItem>
          </List>
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
        <Slide className="mySlideStyles" transition={["slide"]} bgColor="primary" textColor="tertiary" overflowy="scroll">
          <Heading height={200} size={4} textColor="white">Why use React?</Heading>
            <Appear order={1}>
            <List margin="0 20%" textColor="white">
              <ListItem>Virtual DOM</ListItem>
              <ListItem>Developer Tools</ListItem>
              <ListItem>Community</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide className="mySlideStyles" transition={["slide"]} bgColor="primary" textColor="tertiary" overflowy="scroll">
          <Heading height={200} size={4} textColor="white">How does React work?</Heading>
          <Text textColor="white" size={2}>
            A React <b>Component</b> receives <b>properties</b> and <b>children</b> and returns a <b>React Element</b> based on its current state 
          </Text>
        </Slide>
        <Slide height='1000' className="mySlideStyles" overflowy="scroll">
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
            />
          </Fill>
          </Layout>
        </Slide>
        <Slide height='1000' className="mySlideStyles" transition={["slide"]} bgColor="primary" textColor="tertiary" overflowy="scroll">
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
          />
        </Slide>
        <Slide height='900' className="mySlideStyles" transition={["slide"]} bgColor="primary" textColor="tertiary" overflowy="scroll">
          <Heading height={200} size={4} textColor="white">React Lifecycle Continued</Heading>
          <Image src="https://pbs.twimg.com/media/DZ-97vzW4AAbcZj.jpg:large" />
        </Slide>
        <Slide height='900' className="mySlideStyles" transition={["slide"]} bgColor="primary" textColor="tertiary" overflowy="scroll">
          <Heading height={200} size={4} textColor="white">React State and Conditions</Heading>
          <CodePane
              textSize="20px"
              lang="js"
              height='540'
              overflow="scroll"
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
          />
        </Slide>
        <Slide height='900' className="mySlideStyles" transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading height={150} size={4} textColor="white">Don't forget to Bind (or just use arrow functions)</Heading>
          <CodePane
              textSize="20px"
              lang="js"
              height='600px'
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
              overflow="scroll"
          />
        </Slide>
        <Slide className="mySlideStyles" transition={["slide"]} bgColor="primary" textColor="tertiary" overflowy="scroll">
          <Heading height={200} size={4} textColor="white">Getting Started in an Existing Codebase?</Heading>
          <Appear order={1}>
          <List margin="0 30%" textColor="white">
            <ListItem>Redux</ListItem>
            <ListItem>Dev Tools</ListItem>
            <Appear order={1}>
              <List margin="0 30%" textColor="white">
                <ListItem>React Dev Tool</ListItem>
              </List>
            </Appear>
          </List>
          </Appear>
        </Slide>
        <Slide className="mySlideStyles" transition={["slide"]} bgColor="primary" textColor="tertiary" overflowy="scroll">
          <Heading height={200} size={4} textColor="white">What is Redux?</Heading>
          <Appear>
            <div>
              <Heading height={200} size={6} textColor="white">- Flux Architecture for React</Heading>
              <Image src="https://raw.githubusercontent.com/lgvalle/lgvalle.github.io/master/public/images/flux-graph-simple.png" />
            </div>
          </Appear>
        </Slide>
        <Slide height={900} className="mySlideStyles" transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading height={50} size={6} textColor="white">Create Store</Heading>
          <CodePane
              textSize="20px"
              lang="js"
              height='740'
              overflow="scroll"
              source={`import { createStore, Provider } from 'react-redux'
              
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return state + 1
    case 'DECREMENT_COUNT':
      return state - 1
    case 'RESET_COUNT':
      return 0
    default:
      return state
  }
}

const store = createStore(counterReducer, 0)

ReactDOM.render(
  <Provider store={store}>
    <MyRootComponent />
  </Provider>,
  document.getElementById('app')
)
              `}
              margin="20px auto"
          />
        </Slide>
        <Slide height={900} className="mySlideStyles" transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading height={200} size={4} textColor="white">Actions</Heading>
          <CodePane
              textSize="20px"
              lang="js"
              height='540'
              source={`const incrementCount = () => ({
  type: 'INCREMENT_COUNT'
})

const decrementCount = () => ({
  type: 'DECREMENT_COUNT'
})

const resetCount = () => ({
  type: 'RESET_COUNT'
})
              `}
              margin="20px auto"
          />
        </Slide>
        <Slide height={900} className="mySlideStyles" transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading height={200} size={4} textColor="white">Connecting A Component</Heading>
          <CodePane
              textSize="20px"
              lang="js"
              height='540'
              source={`import { connect } from 'react-redux'
import { incrementCount, decrementCount, resetCount } from '../actions'

const Component = ({
  count, incrementCount, decrementCount, resetCount
}) => <div>
  <button onClick={incrementCount}>+</button>
  <button onClick={decrementCount}>-</button>
  <button onClick={resetCount}>Reset</button>
  <span>{count}</span>
</div>

export default connect(
  state => ({ count: state }),
  { incrementCount, decrementCount, resetCount }
)(Component)
              `}
              margin="20px auto"
          />
        </Slide>
        <Slide className="mySlideStyles" transition={["slide"]} bgColor="primary" textColor="tertiary" overflowy="scroll">
          <Heading height={200} size={4} textColor="white">Dev Tools</Heading>
          <List margin="0 10%" textColor="white">
            <ListItem>Redux Dev Tool</ListItem>
          </List>
        </Slide>
        <Slide className="mySlideStyles" transition={["slide"]} bgColor="primary" textColor="tertiary" overflowy="scroll">
          <Heading height={200} size={4} textColor="white">Starting a New Project?</Heading>
          <List margin="0 10%" textColor="white">
            <ListItem>Create React App</ListItem>
            <ListItem>Next.js - Server Rendering</ListItem>
            <ListItem>Gatsby - Static Site Generator</ListItem>            
            <ListItem>nwb - React Components and Libraries, also supports Preact, Inferno</ListItem>
            <ListItem>Spectacle- Presentations</ListItem>
            <ListItem>Neutrino, razzle, after.js, etc</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
