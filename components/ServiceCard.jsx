const ServiceCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left mb-12">
      <div className="text-[#6DD3E1] text-5xl mb-4">{Icon && <Icon />}</div>
      <h3 className="text-white text-2xl font-bold mb-3">{title}</h3>
      <p className="text-white opacity-80 max-w-sm">
        {description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"}
      </p>
    </div>
  )
}

export default ServiceCard

