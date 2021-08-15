export const truncate = (text, length) => {
   return text.substring(0, length);
};

export const getNRandomElems = (arr, n) => {
   const shuffled = arr.sort(() => 0.5 - Math.random());
   return shuffled.slice(0, n);
};
