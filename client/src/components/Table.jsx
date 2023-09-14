export default function Table({ tdata, tableTitle, tdloading }) {
  return tdloading ? (
    <h4>{tableTitle} Loading...</h4>
  ) : (
    <table>
      <caption>{tableTitle}</caption>
      <thead>
        <tr>
          {Object.keys(tdata[0]).map((key, index) =>
            index === 0 ? null : <th key={index}>{key}</th>
          )}
        </tr>
      </thead>
      <tbody>
        {tdata?.map((data, index) => (
          <tr key={data.id}>
            {Object.values(data).map((value, index) =>
              index === 0 ? null : <td key={index}>{value}</td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
