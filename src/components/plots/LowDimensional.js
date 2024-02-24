import React from "react";
import { useState, useEffect } from 'react';
import Plot from "react-plotly.js";
import ScatterPlot from "./ScatterPlot";

export default function LowDimensional(props) {
    const [experiment, setExperiment] = useState(null);
    const [scatterPlot, setScatterPlot] = useState(<></>);

    useEffect(() => {
        fetch(props.apiPlotUrl)
            .then((response) => {
                return response.json();
            })
            .then((data) =>{
                setExperiment(data);
            });
   }, []);

   useEffect(()=> {
    try{
    if(experiment){
        const colorMap = new Map([
            ["0", "red"],
            ["1", "blue"],
            ["2", "green"],
            ["3", "yellow"],
            ["4", "pink"],
            ["5", "brown"],
        ]);
        const colorArray = experiment.clusterNames.map(function(n){
            return colorMap.get(n);
        }) 
        console.log(colorArray);

        setScatterPlot(<ScatterPlot
                y={experiment.tsne2}
                x={experiment.tsne1}
                label_hover_list={experiment.clusterNames}
                color_list={colorArray}
                title={"Low dimentional plot :)"}
            />);
    }
    } catch (error){
        console.log(error);
    }
   }, [experiment]);

    return (
       scatterPlot 
    );

}
