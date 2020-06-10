import React from "react";
import { DropTarget } from "react-drag-drop-container";

/** This class component represents a drag-drop target box.
 *  props:
 *  targetKey (indicates what elements can be dropped at this particular target)
 *
 */
class Droppable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { correct: false, elementIn: null };
  }

  showCorrect() {
    return <div>HELO</div>;
  }

  //executes when the dragged element is dropped onto its target
  dropped = e => {
    if (this.state.elementIn !== null) {
      console.log("something here");
      return;
    }

    if (this.props.triggerDrop) {
      this.props.triggerDrop();
    }
    //hides the dragged element at the source box
    e.containerElem.style.visibility = "hidden";
    //adds the dragged element's content to the array kept in state
    this.setState({ correct: true, elementIn: e.dragData.label });
    if (this.state.correct == true) {
      setTimeout(this.showCorrect.bind(this), 1500);
    }
  };

  render() {
    var width;
    if (this.props.longWord >= 13) {
        width = " width-9em";
    } else if (this.props.longWord >= 11) {
        width = " width-8em";
    } else if (this.props.longWord >= 9) {
        width = " width-6em";
    } else {
        width = " width-4em";
    }

    var elementIn = this.state.elementIn;
    // for (var i = 0; i < elementsIn.length; i++) {
    //     //console.log(this.props.name);
    //     droppedElements.push(<span key={i}>{this.props.name}</span>);
    // }
    //renders drag target-box and adds all dropped content

    if (elementIn == null) {
      return (
        <DropTarget onHit={this.dropped} targetKey={this.props.targetKey}>
          {elementIn}
        </DropTarget>
      );
    } else {
      return (
        // this.props.class ? 
        <DropTarget onHit={this.dropped} targetKey={this.props.targetKey}>
          <span className={this.props.big ? ("dragContainer dd-word width-6em height-2lines") : (this.props.paragraph ? ("dragContainer dd-word" + width) : ("dragContainer"))}>
          {(this.props.big || this.props.paragraph) ? <p>{elementIn}</p> : elementIn}
          </span>
        </DropTarget>
        // : 
        // <span className= {this.props.c}>
        // <DropTarget onHit={this.dropped} targetKey={this.props.targetKey}>
        //   <span className= {this.props.c}>
        //   {elementIn}
        //   </span>
        // </DropTarget></span>
      );
    }
  }
}

export default Droppable;
