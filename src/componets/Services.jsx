import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <p className="text-slate-800 text-4xl font-bold text-center mb-10">
        Our Servies include
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-12">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
}

export default Services;
