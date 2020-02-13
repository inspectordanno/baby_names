import React, { useEffect, useState, useRef } from 'react';
import * as d3 from 'd3';

const LineChart = ({ name }) => {

  const [nameData, setNameData] = useState();
  const lineContainer = useRef();
  const xAxisContainer = useRef();
  const yAxisContainer = useRef();

  const margin = {top: 20, right: 10, bottom: 20, left: 10};

  const width = 800 - margin.left - margin.right;
  const height = 600  - margin.top - margin.bottom;

  useEffect(() => {
    //I could just import the file locally, but I want to simulate an api call
    const getNameData = async () => {
      const url = `https://raw.githubusercontent.com/inspectordanno/baby_names/master/parse_json/names/${name}.json`;
      const resolvedNameData = await d3.json(url);

      //sets local state to resolved data
      setNameData(resolvedNameData);
    }

    getNameData();

  }, [name])

  useEffect(() => {
    //d3 code goes in here

    if (nameData && lineContainer.current && xAxisContainer.current && yAxisContainer.current) {

      const years = nameData.map(d => d.year);
      const proportions = nameData.map(d => d.prop);
      const maleBirths = nameData.filter(birth => birth.sex === 'M');
      const femaleBirths = nameData.filter(birth => birth.sex === 'F');

      const xScale = d3.scaleLinear() //can do a time scale but making this simple
        .domain(d3.extent(years)) //calculates min and max
        .range([0, width]);

      const yScale = d3.scaleLinear()
        .domain([0, d3.max(proportions)])
        .range([height, 0]);

      const xAxis = d3.axisBottom()
        .scale(xScale);
        
      const yAxis = d3.axisRight()
        .scale(yScale);

      const lineGenerator = d3.line()
        .x(d => xScale(d.year))
        .y(d => yScale(d.prop));


      //create / update the line
      const line = d3.select(lineContainer.current)
        .data(femaleBirths)
  
      line
        .transition()
        .duration(300)
        .attr('d', lineGenerator)
        .attr('fill', 'none')
        .attr('stroke', 'steelblue')
        .attr('stroke-width', 2.5)

      //create / update the x axis
      d3.select(xAxisContainer.current)
        .transition()
        .duration(500)
        .call(xAxis)

      //create / update the y axis
      d3.select(yAxisContainer.current)
        .transition()
        .duration(500)
        .call(yAxis);
    }

  }, [nameData, xAxisContainer.current, yAxisContainer.current, lineContainer.current])

  return (
    <svg
      width={width}
      height={height}
    >
      <g ref={xAxisContainer} transform={`translate(${margin.left}, ${height - margin.bottom})`} />
      <g ref={yAxisContainer} transform={`translate(${margin.left}, ${margin.top})`} />
      <g ref={lineContainer}  transform={`translate(${margin.left}, ${margin.top})`}>
        <path ref={lineContainer} />
      </g>
    </svg>
  );

}

export default LineChart;