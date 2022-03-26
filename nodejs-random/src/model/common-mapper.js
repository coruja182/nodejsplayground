const isoToUTCStringMapper = (dateString) => {
  if (!dateString)
    return undefined
  return dateString.split(' ').join('T') + 'Z'
}

module.exports = {
  isoToUTCStringMapper
}
