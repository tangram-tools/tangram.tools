export default function Testimonials() {
  const testimonials = [
    { name: "Grady, Founder", quote: "Tangram Tools changed how I work." },
    { name: "Hazel, PhD Student", quote: "A lifesaver for my research." },
    { name: "Alex, Consultant", quote: "An essential part of my workflow." },
  ];

  return (
    <section className="px-6 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">
        See What Our Users Are Saying
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="p-6 border rounded-md bg-gray-50 text-center"
          >
            <blockquote className="mb-4 italic">"{t.quote}"</blockquote>
            <figcaption className="font-semibold">{t.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
