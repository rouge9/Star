function ServiceCard() {
  return (
    <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl ">
      <div className="h-52 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl"></div>
      <div className="p-4 md:p-6">
        <h3 className="text-xl font-semibold text-gray-800">Atlassian</h3>
        <p className="mt-3 text-gray-500">
          A software that develops products for software developers and
          developments.
        </p>
      </div>
      <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 ">
        <a
          className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
          href="#"
        >
          View sample
        </a>
      </div>
    </div>
  );
}

export default ServiceCard;
