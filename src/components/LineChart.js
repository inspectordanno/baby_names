import React, { useEffect, useState, useRef } from 'react';
import * as d3 from 'd3';

const LineChart = ({ name }) => {

  const [nameData, setNameData] = useState();
  const lineContainerFemale = useRef();
  const lineContainerMale = useRef();
  const xAxisContainer = useRef();
  const yAxisContainer = useRef();

  const margin = {top: 20, right: 30, bottom: 30, left: 40};

  const width = 900;
  const height = 500;

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

    if (nameData) {

      //const years = nameData.map(d => d.year)
      const years = d3.range(1880, 2021) //generates years from 1880 to 2020 for the x-axis
      const proportions = nameData.map(d => d.prop);
      const maleBirths = nameData.filter(birth => birth.sex === 'M');
      console.log(maleBirths);
      const femaleBirths = nameData.filter(birth => birth.sex === 'F');
      console.log(femaleBirths);

      const xScale = d3.scaleLinear() //can do a time scale but making this simple
        .domain(d3.extent(years)) //calculates min and max
        .range([margin.left, width - margin.right]); //range of inner dimensions of chart

      const yScale = d3.scaleLinear()
        .domain([0, d3.max(proportions)])
        .range([height - margin.bottom, margin.top]);

      const xAxis = d3.axisBottom()
        .scale(xScale)
        .tickFormat(d3.format(""));

      // if the maxiumum proportion is above .001 of the population, use percentage notation
      // if it is below .001 of the population, use scientific notation
      const determineYAxisFormat = (proportions) => {
        if (d3.max(proportions) < 0.001) {
          return d3.format(".0e");
        } else if (d3.max(proportions) >= 0.001) {
          return d3.format(",.1%");
        }
      }
        
      const yAxis = d3.axisLeft()
        .scale(yScale)
        .tickFormat(determineYAxisFormat(proportions))
        .tickSizeOuter(0)

      const lineGenerator = d3.line()
        .x(d => xScale(d.year))
        .y(d => yScale(d.prop));

       //creates / updates the line 
      const drawLine = (container, data, color) => {
        
        const line = d3.select(container.current)
          .datum(data)

        line
          .transition()
          .duration(300)
          .attr('d', lineGenerator)
          .attr('fill', 'none')
          .attr('stroke', color)
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

       drawLine(lineContainerFemale, femaleBirths, 'orange');
       drawLine(lineContainerMale, maleBirths, 'green');
    }  

  }, [nameData])  

  return (
    <svg
      width={width}
      height={height}
    >
      <g ref={xAxisContainer} transform={`translate(0, ${height - margin.bottom})`} />
      <g ref={yAxisContainer} transform={`translate(${margin.left}, 0)`} />
      <g>
        <path ref={lineContainerFemale} />
        <path ref={lineContainerMale} />
      </g>
    </svg>
  );

}

export default LineChart;