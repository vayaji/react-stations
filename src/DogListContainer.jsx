// @ts-check

import { useEffect, useState } from "react";
import BreedsSelect from "./BreedsSelect";

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((res) => {setBreeds(Object.keys(res.message)); setSelectedBreed(Object.keys(res.message)[0])});
  }, []);
  const handleClick = () => {
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images`)
      .then((res) => res.json())
      .then((res) => {setImages(res.message); console.log(res.message)});
  };
  return <div className="dog-list-container">
    <div className="control">
      Breeds list
      <BreedsSelect breeds={breeds} setSelectedBreed={setSelectedBreed}  />
      <button type="button" onClick={handleClick}>表示</button>
    </div>
    <ul>
    {images.map((url, index) => <li><img key={index} src={url} /></li>)}
    </ul>
  </div>
}

export default DogListContainer
