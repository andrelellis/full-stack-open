export const isDuplicateName = (newName, personList) => {
  return !personList.every((person) => {
    return person.name !== newName;
  });
};
