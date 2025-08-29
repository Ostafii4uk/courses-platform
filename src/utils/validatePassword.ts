export const validatePassword = (value: string) => {
  if (value.length < 6) {
    return 'Password must be at least 6 characters long'
  }
  if (!/[A-Z]/.test(value)) {
    return 'Password must contain at least one uppercase letter'
  }
  if (!/[a-z]/.test(value)) {
    return 'Password must contain at least one lowercase letter'
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
    return 'Password must contain at least one special character'
  }
  return ''
}
