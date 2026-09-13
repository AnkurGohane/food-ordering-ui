export const FIRST50_COUPON = {
  code: "FIRST50",
  discount: 50,
} as const;

export function isFirst50Coupon(code: string) {
  return code.trim().toUpperCase() === FIRST50_COUPON.code;
}

