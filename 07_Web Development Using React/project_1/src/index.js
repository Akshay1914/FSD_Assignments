import React from "react";
import ReactDOM from "react-dom";



class FSD extends React.Component {
  constructor() {
    super();
    this.state = { learning_new: "React",learning_old: "javaScript" };
  }
  shouldComponentUpdate() {
    return true;
  }
  change = () => {
    this.setState({ learning_old: "HTML" });
  };
  /*getSnapshotBeforeUpdate(prevProps, prevState){
  document.getElementById("b4").innerHTML = "LINE 1 was " + prevState.learning_new;
  }*/
  componentDidUpdate() {
    document.getElementById("after").innerHTML = "updated line 1 to " + this.state.learning_new;
  }
 static getDerivedStateFromProps(props, state) {
         
               return { learning_new: props.New};
  
  
 }

  render() {
      return (
      <div>
          <div>
              <h1>I am curently learning {this.state.learning_new}</h1>             
          </div>
          <div>
              <h1>we have already completed the last module named {this.state.learning_old}</h1>
                <button type="button" onClick={this.change}>
                Old learning
                </button>
            </div>
            <div>
                <div id="b4"></div>
                <div id="after"></div>
                <div id="l1_after"></div>
            </div>
        </div>
    );
  }
}
ReactDOM.render(<FSD New="React 16"/>, document.getElementById("root"));