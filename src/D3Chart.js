import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const D3Chart = () => {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current)
      .attr('width', 200)
      .attr('height', 200)
      .style('background', '#f0f0f0');

    svg.append('rect')
      .attr('x', 50)
      .attr('y', 50)
      .attr('width', 100)
      .attr('height', 100)
      .style('fill', 'blue')
      .on('mouseover', function() {
        d3.select(this).style('fill', 'orange');
      })
      .on('mouseout', function() {
        d3.select(this).style('fill', 'blue');
      });
  }, []);

  return (
    <div>
      <svg ref={ref}></svg>
    </div>
  );
};

export default D3Chart;