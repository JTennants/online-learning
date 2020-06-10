import React from 'react';
import { DragDropContainer } from 'react-drag-drop-container';

/** This class component represents a container for an element to be dragged. 
 *  parameters: dragIndex (indicates at what box the element can be dropped)
 *  dragEnabled- specifies if the element should be let dragged or not
 *  text- text of the element to be dragged
 * 
 * This example uses DragDropContainer and DropTarget available at:
 * https://github.com/peterh32/react-drag-drop-container
 * It is different from Dragula.
*/

/*  renders a drag-drop container with its content
    props: label (dragged content),
           targetKey (indicates at what target the element can be dropped),
           dragDisabled [true/false] - by default the element can be dragged
*/
class Draggable extends React.Component {

    constructor(props) {
        super(props);
        var dragDisabled = false;
        if (props.dragDisabled != null && props.dragDisabled != undefined)
            dragDisabled = props.dragDisabled
        this.state = { dragDisabled: dragDisabled, dropped: false };
    };

    render() {
        var dragContent = <DragContent label={this.props.label} big={this.props.big} paragraph={this.props.paragraph} longWord={this.props.longWord} />
        return (
            <DragDropContainer
                targetKey={this.props.targetKey}
                dragData={{ label: this.props.label, clones: this.props.copies }}
                noDragging={this.state.dragDisabled}>
                {dragContent}
            </DragDropContainer>
        );
    }
}

function DragContent(props) {

    var width;
    if (props.longWord >= 13) {
        width = " width-9em";
    } else if (props.longWord >= 11) {
        width = " width-8em";
    } else if (props.longWord >= 9) {
        width = " width-6em";
    } else {
        width = " width-4em";
    }

    return <span className={props.big ? ("dragContainer dd-word width-6em height-2lines") : (props.paragraph ? ("dragContainer dd-word" + width) : ("dragContainer"))}>{(props.big || props.paragraph) ? (<p>{props.label}</p>) : (props.label)}</span>
}

export default Draggable;