import React, { Component } from "react";
class App extends Component {
state = {
name: "",
};
handleChange = (event) => {
this.setState({
name: event.target.value,
});
};
render() {
return (
<div>
<input
type="text"
value={this.state.name}
onChange={this.handleChange}
/>
<h1>hi, {this.state.name}</h1>
</div>
);
}
}
export default App;