// @ts-check

export const BreedsSelect = ({ breeds, setSelectedBreed }) => {
	return (
		<>
			<select onChange={(e) => setSelectedBreed(e.target.value)}>
				{breeds.map((breed) => (
					<option key={breed}>{breed}</option>
				))}
			</select>
		</>
	);
};

export default BreedsSelect;
