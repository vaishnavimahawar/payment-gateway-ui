export const merchant = { name: 'homefood' };

export const customer = { name: 'Prasad Naik', phone: '9999999999' };

export const order = {
  id: 'Order12312',
  orderValue: 500000,
  discount: 2000,
  savingPercent: 0.4,
  payable: 498000,
};

export type PaymentMethodId = 'upi' | 'wallet' | 'card' | 'netbanking';

export const paymentMethods: { id: PaymentMethodId; label: string }[] = [
  { id: 'upi', label: 'UPI' },
  { id: 'wallet', label: 'Wallet' },
  { id: 'card', label: 'Debit / Credit Card' },
  { id: 'netbanking', label: 'Net Banking' },
];

// Indian digit grouping, always two decimals: 500000 -> ₹5,00,000.00
export function formatINR(amount: number): string {
  return (
    '₹' +
    amount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  );
}
