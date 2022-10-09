export const isPunctuation = (text) => {
  const punctuation = ["。", "，", "？", "！", "…"];
  return punctuation.includes(text);
};
