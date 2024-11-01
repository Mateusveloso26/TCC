
const data = [
  { code: "01", name: "Item 1", description: "Descrição do Item 1" },
  { code: "02", name: "Item 2", description: "Descrição do Item 2" },
  { code: "03", name: "Item 3", description: "Descrição do Item 3" },
  { code: "04", name: "Item 4", description: "Descrição do Item 4" },
  { code: "05", name: "Item 5", description: "Descrição do Item 5" },
  { code: "06", name: "Item 6", description: "Descrição do Item 6" },
  { code: "07", name: "Item 7", description: "Descrição do Item 7" },
  { code: "08", name: "Item 8", description: "Descrição do Item 8" },
];

export function Table  ()  {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="border border-gray-300 px-4 py-2">Código</th>
            <th className="border border-gray-300 px-4 py-2">Nome</th>
            <th className="border border-gray-300 px-4 py-2">Descrição</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.code} className="hover:bg-gray-200">
              <td className="border border-gray-300 px-4 py-2">{item.code}</td>
              <td className="border border-gray-300 px-4 py-2">{item.name}</td>
              <td className="border border-gray-300 px-4 py-2">
                {item.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


