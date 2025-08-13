'use client';

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export default function D3PatternChart() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.innerHTML = '';

    const data = [
      { turns: 2,  novelty: 0.2, alignment: 0.6 },
      { turns: 5,  novelty: 0.35, alignment: 0.58 },
      { turns: 10, novelty: 0.5, alignment: 0.55 },
      { turns: 20, novelty: 0.7, alignment: 0.52 },
      { turns: 30, novelty: 0.78, alignment: 0.5  },
      { turns: 40, novelty: 0.82, alignment: 0.48 },
    ];

    const w = Math.min(900, el.clientWidth);
    const h = 360;
    const m = { t: 20, r: 20, b: 40, l: 44 };

    const svg = d3.select(el)
      .append('svg')
      .attr('viewBox', `0 0 ${w} ${h}`);

    const x = d3.scaleLinear()
      .domain(d3.extent(data, d => d.turns)).nice()
      .range([m.l, w - m.r]);

    const y = d3.scaleLinear()
      .domain([0, 1]).nice()
      .range([h - m.b, m.t]);

    const g = svg.append('g');

    const line = d3.line()
      .x(d => x(d.turns))
      .y(d => y(d.novelty))
      .curve(d3.curveMonotoneX);

    const line2 = d3.line()
      .x(d => x(d.turns))
      .y(d => y(d.alignment))
      .curve(d3.curveMonotoneX);

    // axes
    g.append('g').attr('transform', `translate(0,${h - m.b})`).call(d3.axisBottom(x));
    g.append('g').attr('transform', `translate(${m.l},0)`).call(d3.axisLeft(y));

    // series
    g.append('path')
      .datum(data)
      .attr('d', line)
      .attr('fill', 'none')
      .attr('stroke', '#1d4ed8')
      .attr('stroke-width', 2);

    g.append('path')
      .datum(data)
      .attr('d', line2)
      .attr('fill', 'none')
      .attr('stroke', '#16a34a')
      .attr('stroke-width', 2);

    // legend
    const legend = svg.append('g').attr('transform', `translate(${w - 180},${m.t})`);
    legend.append('rect').attr('width', 160).attr('height', 46).attr('rx', 8).attr('fill', '#f3f4f6');
    legend.append('line').attr('x1', 12).attr('y1', 16).attr('x2', 52).attr('y2', 16).attr('stroke', '#1d4ed8').attr('stroke-width', 3);
    legend.append('text').attr('x', 60).attr('y', 20).attr('font-size', 12).text('Novelty');
    legend.append('line').attr('x1', 12).attr('y1', 32).attr('x2', 52).attr('y2', 32).attr('stroke', '#16a34a').attr('stroke-width', 3);
    legend.append('text').attr('x', 60).attr('y', 36).attr('font-size', 12).text('Alignment');
  }, []);

  return <div ref={ref} className="w-full" />;
}
