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
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`)
      .then((res) => res.json())
      .then((res) => {setImages(res.message); console.log(res.message)});
  };
  return <>
    <BreedsSelect breeds={breeds} setSelectedBreed={setSelectedBreed}  />
    <button type="button" onClick={handleClick}>表示</button>
    {images.map((url, index) => <img key={index} src={url} />)}
  </>
}

export default DogListContainer
