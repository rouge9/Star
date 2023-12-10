import ServiceCard from "./ServiceCard";

function Services() {
  return (
    // <a id="" className="block relative-top-20" href="/gallery">
    <div className="max-w-screen-2xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <p className="text-slate-800 text-4xl font-bold text-center mb-10">
        Our Servies include
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-12">
        <ServiceCard
          title="Interior and Exterior Painting"
          description="Our team is skilled at transforming both the inside and outside of your property."
          image={
            "https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
          }
          color={"bg-slate-800"}
        />
        <ServiceCard
          title="Contextra"
          description="We offer texture-rich designs to add character to your walls."
          image={
            "https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
          }
          color={"bg-amber-500"}
        />
        <ServiceCard
          title="Granite Painting"
          description="Enhancing interiors with the sophistication of granite finishes."
          image={
            "https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
          }
          color={"bg-blue-600"}
        />
        <ServiceCard
          title="Jotun Products"
          description="We proudly offer Jotun products known for quality, durability, and eco-friendliness."
          image={
            "https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
          }
          color={"bg-rose-500"}
        />
        <ServiceCard
          title="Stone Painting"
          description="Recreating the natural beauty of stone to bring a touch of the outdoors inside."
          image={
            "https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
          }
          color={"bg-red-800"}
        />
        <ServiceCard
          title="Epoxy Flooring"
          description="Our epoxy flooring solutions are not just beautiful but also durable, ensuring that your floors are both functional and visually pleasing."
          image={
            "https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
          }
          color={"bg-gray-500"}
        />
      </div>
    </div>
    // </a>
  );
}

export default Services;
