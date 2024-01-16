export const sum = (nb1: number, nb2: number) => {
  if (nb1 === 0) {
    return 'je ne sais pas additionner zéro';
  } else if (nb2 === 0) {
    return 'je ne sais toujours pas additionner zéro';
  }
  return nb1 + nb2;
};

export const sub = (nb1: number, nb2: number) => nb1 - nb2;
