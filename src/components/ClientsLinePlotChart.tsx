import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';

const ClientsLinePlotChart = () => {
  const data = [
    {
      year: 'Jan',
      value: 3,
    },
    {
      year: 'Feb',
      value: 4,
    },
    {
      year: 'March',
      value: 10,
    },
    {
      year: 'April',
      value: 5,
    },
    {
      year: 'May',
      value: 9,
    },
    {
      year: 'June',
      value: 6,
    },
    {
      year: 'July',
      value: 7,
    },
    {
      year: 'Aug',
      value: 9,
    },
    {
      year: 'Sep',
      value: 13,
    },
    {
      year: 'Oct',
      value: 15,
    },
    {
      year: 'Nov',
      value: 13,
    },
    {
      year: 'Dec',
      value: 19,
    },
  ];
  const config = {
    data,
    xField: 'year',
    yField: 'value',
    label: {},
    title : 'Client Acquisition 2024',
    point: {
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#5B8FF9',
        lineWidth: 2,
      
      },
    },
    tooltip: {
      showMarkers: false,
    },
    state: {
      active: {
        style: {
          shadowBlur: 4,
          stroke: '#000',
          fill: 'red',
        },
      },
    },
    interactions: [
      {
        type: 'marker-active',
      },
    ],
  };
  return <Line {...config} />;
};

export default ClientsLinePlotChart;