// src/components/ProductCard.jsx

function ProductCard({ name, description, image }) {
  return (
    <div className="border border-[#9face3] p-6 rounded-lg shadow-lg">
      <img src={image} alt={name} className="bg-auto bg-no-repeat bg-center mx-auto rounded-lg bg-contain" />
      <h3 className="text-xl font-semibold mt-4">{name}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}

export default ProductCard;
