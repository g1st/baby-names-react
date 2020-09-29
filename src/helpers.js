export const sortByName = (babies) => {
  return babies.slice().sort((a, b) => a.name.localeCompare(b.name));
};

export const filterByName = (babies, searchValue) => {
  return babies.filter((baby) => baby.name.toLowerCase().includes(searchValue));
};

export const shuffle = (babies) => {
  const possibleIndices = babies.map((_, i) => i);

  const shuffled = Array.from({ length: babies.length });

  babies.forEach((baby) => {
    const randomIndex = Math.floor(Math.random() * possibleIndices.length);
    const index = possibleIndices[randomIndex];
    shuffled[index] = baby;
    possibleIndices.splice(randomIndex, 1);
  });

  return shuffled;
};
