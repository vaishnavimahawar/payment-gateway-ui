import { useState } from 'react';
import { customer, merchant, order, type PaymentMethodId } from './data';
import MerchantHeader from './components/MerchantHeader';
import OrderSummary from './components/OrderSummary';
import PaymentMethods from './components/PaymentMethods';
import PoweredBy from './components/PoweredBy';
import ProceedButton from './components/ProceedButton';

export default function App() {
  // All payment options start collapsed; opening one closes the others.
  const [method, setMethod] = useState<PaymentMethodId | null>(null);

  return (
    <div className="checkout">
      <MerchantHeader name={merchant.name} />
      <OrderSummary
        customerName={customer.name}
        phone={customer.phone}
        orderId={order.id}
        orderValue={order.orderValue}
        discount={order.discount}
        savingPercent={order.savingPercent}
        payable={order.payable}
      />
      <main className="panel">
        <div className="panel__content">
          <PaymentMethods selected={method} onSelect={setMethod} />
          <PoweredBy />
        </div>
        <ProceedButton onClick={() => {}} />
      </main>
    </div>
  );
}
