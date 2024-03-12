import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { useRecoilValue } from "recoil";
import { statisticsState } from "../store/atom";

const Graph = () => {
  const state = useRecoilValue(statisticsState);

  if (!state) return <></>;

  const values = state.value;
  const dimensionIndexes = state?.dimension?.Tid?.category?.index || {};

  const data = Object.entries(dimensionIndexes).map(
    ([quarter, quarterIndex]) => {
      return {
        name: quarter,
        value: values[quarterIndex],
      };
    }
  );
  return (
    <div>
      <BarChart width={700} height={700} data={data}>
        <Bar dataKey="value" fill="green" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </BarChart>
    </div>
  );
};

export default Graph;
