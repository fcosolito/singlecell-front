import React from "react";
import Plot from "react-plotly.js";

class ScatterPlot extends React.Component {
    render(){
        return (
            <Plot
                data={[
                {
                    x: this.props.x,
                    y: this.props.y,
                    text: this.props.label_hover_list,
                    type: "scatter",
                    mode: "markers",
                    marker: {
                        color: this.props.color_list,
                    }
                },
                {
                    
                },
                ]}
                layout={
                    {width: 500, height: 500, title: this.props.title}
                }
                />
        );
    }
}
export default ScatterPlot;