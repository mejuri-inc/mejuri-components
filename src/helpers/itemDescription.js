export const getItemDetails = (ringSize, engravings, material) => {
  if (!ringSize && !engravings && !material) return null

  // Join ring size, engravings and material into a single string
  let detailsArray = []
  if (ringSize) detailsArray.push(ringSize)
  if (engravings) detailsArray.push(engravings)
  if (material) detailsArray.push(material)
  const details = detailsArray.filter((e) => e && e.length > 1).join(', ')
  return details
}
