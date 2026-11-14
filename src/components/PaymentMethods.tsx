import type { ReactNode } from 'react';
import { paymentMethods, type PaymentMethodId } from '../data';
import PaymentOption from './PaymentOption';
import { BankIcon, CardIcon, UpiIcon, WalletIcon } from './icons';

const icons: Record<PaymentMethodId, ReactNode> = {
  upi: <UpiIcon />,
  wallet: <WalletIcon />,
  card: <CardIcon />,
  netbanking: <BankIcon />,
};

const wallets = ['Paytm', 'PhonePe', 'Amazon Pay', 'Mobikwik'];
const banks = ['State Bank of India', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Kotak Mahindra Bank'];

function MethodBody({ id }: { id: PaymentMethodId }) {
  switch (id) {
    case 'upi':
      return <input className="pay-field" type="text" placeholder="Enter UPI ID (e.g. name@bank)" />;
    case 'wallet':
      return (
        <div className="pay-choices">
          {wallets.map((wallet) => (
            <label key={wallet} className="pay-choice">
              <input type="radio" name="wallet" value={wallet} />
              {wallet}
            </label>
          ))}
        </div>
      );
    case 'card':
      return (
        <>
          <input className="pay-field" type="text" inputMode="numeric" placeholder="Card Number" />
          <div className="pay-field-row">
            <input className="pay-field" type="text" placeholder="MM / YY" />
            <input className="pay-field" type="password" inputMode="numeric" placeholder="CVV" />
          </div>
          <input className="pay-field" type="text" placeholder="Name on Card" />
        </>
      );
    case 'netbanking':
      return (
        <select className="pay-field" defaultValue="">
          <option value="" disabled>
            Select your bank
          </option>
          {banks.map((bank) => (
            <option key={bank}>{bank}</option>
          ))}
        </select>
      );
  }
}

type Props = {
  selected: PaymentMethodId | null;
  onSelect: (id: PaymentMethodId | null) => void;
};

export default function PaymentMethods({ selected, onSelect }: Props) {
  return (
    <section className="methods">
      <h3 className="methods__title">Select Payment Method</h3>
      {paymentMethods.map((method) => (
        <PaymentOption
          key={method.id}
          id={method.id}
          icon={icons[method.id]}
          label={method.label}
          isOpen={selected === method.id}
          onToggle={() => onSelect(selected === method.id ? null : method.id)}
        >
          <MethodBody id={method.id} />
        </PaymentOption>
      ))}
    </section>
  );
}
