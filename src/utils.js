function formatId(id) {
  let newId = id;
  if (id >= 0 && id <= 9) {
    newId = "00" + id;
  } else if (id >= 10 && id <= 99) {
    newId = "0" + id;
  }
  return newId;
}

export { formatId };