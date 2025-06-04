export default function Tools() {
  const tools = [
    {
      name: "QuickRead",
      description: "Summarizes books via photo/title input",
    },
    {
      name: "DoneOS",
      description: "Personal task execution system",
    },
    {
      name: "Zettelkasten",
      description: "Knowledge capture and linking system",
    },
  ];

  return (
    <section id="toolbox" className="px-6 py-16 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Powerful Tools at Your Fingertips
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="p-6 border rounded-md bg-white text-center"
          >
            <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
            <p className="text-gray-600">{tool.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
