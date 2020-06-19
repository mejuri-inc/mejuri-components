export const ValidationHelper = {
  validEmail: function (email) {
    const regex = new RegExp('^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$', 'i')
    return email && regex.test(email)
  }
}
