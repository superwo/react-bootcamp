const generateRandomColor = function() {
  const ch = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    const i = Math.floor(Math.random() * ch.length);
    color = color + ch[i];
  }
  return color;
};

export { generateRandomColor };
