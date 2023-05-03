"use strict";

// Async Function 1: Random Number
async function getRandomNumber() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 5) + 1;
      resolve(randomNumber);
    }, 500);
  });
}

// Async Function 2: Get City Data
async function getCityData(city) {
  const url = `https://geocode.xyz/${city}?json=1`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Error fetching city data for ${city}: ${response.statusText}`
      );
    }

    const data = await response.json();

    if (!data.longt) {
      throw new Error(`No longitude data found for ${city}`);
    }

    return data;
  } catch (error) {
    throw new Error(`Error fetching city data for ${city}: ${error.message}`);
  }
}

// Async Function 3: Fetch Product
async function fetchProducts(id) {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    if (!data.title) {
      throw new Error(`Invalid product data: name is undefined`);
    }
    return data.title;
  } catch (error) {
    return `Could not get products: Error: ${error.message}`;
  }
}

// Async Function 4: Search Store Price
async function searchStorePrice(product_name) {
  try {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    if (!response.ok) {
      throw new Error("Could not get product3333");
    }
    const products = await response.json();
    const product = products.find(
      (p) => p?.name.toLowerCase() === product_name?.toLowerCase()
    );
    if (!product) {
      throw new Error("Product not found");
    }
    return product.price;
  } catch (error) {
    throw new Error(`Could not get products ${error}`);
  }
}

// Async Function 5: Star Wars API
// const fetch = require('node-fetch');

const getStarWarsCharacters = async () => {
  try {
    const response = await fetch("https://swapi.dev/api/people/");
    if (!response.ok) {
      throw new Error("Could not retrieve Star Wars characters");
    }
    const data = await response.json();
    const characters = {};
    data.results.forEach((character) => {
      characters[character.name] = character.url;
    });
    return { characters };
  } catch (error) {
    throw new Error(`Could not retrieve Star Wars characters: ${error}`);
  }
};
