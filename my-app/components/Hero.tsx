import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-16">
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Transform Your Ideas into Reality
        </h1>
        <p className="text-lg text-gray-600">
          Mix and match templates &amp; tools to build a solution that works the
          way you do.
        </p>
        <Link
          href="#toolbox"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
        >
          See The Toolbox
        </Link>
      </div>
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <div className="w-80 h-60 bg-gray-200 rounded-md" />
      </div>
    </section>
  );
}
