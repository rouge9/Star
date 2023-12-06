/* eslint-disable react/prop-types */
function ClientsCard({ title, description, icon }) {
  return (
    <div className="flex gap-x-5">
      {icon}
      <div className="grow">
        <h3 className="text-lg font-semibold text-gray-800 ">{title}</h3>
        <p className="mt-1 text-gray-600 ">{description}</p>
      </div>
    </div>
  );
}

export default ClientsCard;
