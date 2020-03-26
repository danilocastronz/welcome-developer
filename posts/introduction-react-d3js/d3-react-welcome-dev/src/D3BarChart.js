import * as d3 from "d3";
const url = "https://api.coinranking.com/v1/public/coins?limit=10";
const MARGIN = { TOP: 10, BOTTOM: 50, LEFT: 50, RIGHT: 10 };
const WIDTH = 800 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 500 - MARGIN.TOP - MARGIN.BOTTOM;
export default class D3BarChart {
  constructor(element) {
    const svg = d3
      .select(element)
      .append("svg")
      .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
      .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
      .append("g")
      .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`);
    d3.json(url).then(coinData => {
        const ds = coinData.data.coins;
        ds.sort(function (a, b) { return b.numberOfExchanges - a.numberOfExchanges})
      const y = d3
        .scaleLinear()
        .domain([
          d3.min(ds, d => d.numberOfExchanges),
          d3.max(ds, d => d.numberOfExchanges)
        ])
        .range([HEIGHT, 0]);
      const x = d3
        .scaleBand()
        .domain(ds.map(d => d.name))
        .range([0, WIDTH])
        .padding(0.5);
      const xAxisCall = d3.axisBottom(x);
      svg
        .append("g")
        .attr("transform", `translate(0, ${HEIGHT})`)
        .call(xAxisCall);
      const yAxisCall = d3.axisLeft(y);
        svg.append("g").call(yAxisCall);
      
      const rects = svg.selectAll("rect").data(ds);
      rects
        .enter()
        .append("rect")
        .attr("x", d => x(d.name))
        .attr("y", d => y(d.numberOfExchanges))
        .attr("width", x.bandwidth)
        .attr("height", d => HEIGHT - y(d.numberOfExchanges))
        .attr("fill", "orange")
    });
  }
}