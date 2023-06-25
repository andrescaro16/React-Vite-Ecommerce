const Card = () => {
	return (
		<div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
			<figure className="relative mb-3 w-full h-4/5">
				<span className="absolute bottom-1 left-1 bg-white/60 rounded-lg text-xs text-black px-3 py-0.5">Electronics</span>
				<img src="https://i.ibb.co/zr71M7K/headphonesss.jpg" alt="Headphones" className="w-full h-full object-cover rounded-lg" />
				<div className="absolute top-1 right-1 w-5 h-5 flex justify-center items-center bg-white rounded-full font-medium">+</div>
			</figure>
			<p className="flex justify-between items-center">
				<span className="text-sm font-light">Headphones</span>
				<span  className="text-base font-medium">$18,99</span>
			</p>
		</div>
	);
}

export default Card;