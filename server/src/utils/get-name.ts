export const getPartialName = (nickname: string) => {
  const fullname = nickname.split(' ');

  const name = fullname[0];
  const lastname = fullname[fullname.length - 1];

  return {
    name,
    lastname,
  };
};
