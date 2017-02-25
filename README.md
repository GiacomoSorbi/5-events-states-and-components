# README #

React Introduction

## Installation

Clone this repository and use `npm start` in your terminal to make it start

## Activities and Objectives

You are tasked to connect the input field from your previous exercise to your `Container` component.

The input field should be validated and its valued passed as the `circles` props to Container at each keypress, making proper use of the `setState()` method.

Does it change the number of circles when you input a new value?

Examples:

```
class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //something here
    }
  }

  handleInputChange(e) {
    //some spell here
  }

  render() {
    //and finally more magic here
  }
```

## Extra notes and tips

Would it be ok to just use states instead of props, then?

Could you be able to update the number of `Circle`s only when the `return` button is pressed?

What changes to the structure, eventhandling and `state` object would be required to be also able to delete circles with a click?
