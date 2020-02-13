import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';

const LineChart = ({ name }) => {

  const [nameData, setNameData] = useState();

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
      console.log(nameData);
    }

  }, [nameData])

  return (
    <div>

    </div>
  );

}

export default LineChart;