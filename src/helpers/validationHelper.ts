
export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

export function isValidName(name: string): boolean {
  return typeof name === 'string' && /^[a-zA-Z\s]+$/.test(name) && name.trim().length > 0;
}
  export const isValidPrice = (price: number): boolean => {
    return price > 0;
  };

  export function isValidTitle(title: string): boolean {
    return title.length > 3;
  }
