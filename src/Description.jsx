// @ts-check

import { useState } from "react";
import DogImage from "./DogImage";

export const Description = () => {
	const [dogUrl, setDogUrl] = useState(
		"https://images.dog.ceo/breeds/terrier-sealyham/n02095889_1120.jpg",
	);

	const handleSubmit = () => {
		fetch("https://dog.ceo/api/breeds/image/random")
			.then((res) => res.json())
			.then((res) => setDogUrl(res.message));
	};
	return (
		<div className="description">
			<p>犬の画像を表示するサイトです。</p>
			<div className="image">
				<DogImage imageUrl={dogUrl} />
				<button className="refresh" type="button" onClick={handleSubmit}>
					更新
				</button>
			</div>
		</div>
	);
};

export default Description;
