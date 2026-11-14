import { useState } from 'react';
import { formatINR } from '../data';
import { ChevronDown, OfferBadge } from './icons';

type Props = {
  customerName: string;
  phone: string;
  orderId: string;
  orderValue: number;
  discount: number;
  savingPercent: number;
  payable: number;
};

export default function OrderSummary(props: Props) {
  // The reference shows the order details expanded.
  const [detailsOpen, setDetailsOpen] = useState(true);

  return (
    <section className="summary">
      <h2 className="summary__greeting">Hi {props.customerName},</h2>
      <p className="summary__phone">{props.phone}</p>

      <hr className="summary__divider" />

      <div className="summary__order">
        <span className="summary__order-id">Order {props.orderId} orderNumber</span>
        <button
          type="button"
          className={'summary__toggle' + (detailsOpen ? '' : ' is-collapsed')}
          aria-expanded={detailsOpen}
          onClick={() => setDetailsOpen((open) => !open)}
        >
          View order
          <ChevronDown className="chevron" />
        </button>
      </div>

      {detailsOpen && (
        <div className="summary__details">
          <div className="summary__row summary__row--value">
            <span>Order Value</span>
            <span>{formatINR(props.orderValue)}</span>
          </div>
          <div className="summary__row summary__row--discount">
            <span>Discount</span>
            <span>{formatINR(props.discount)}</span>
          </div>
          <div className="summary__saving">
            <span className="saving-pill">
              <OfferBadge />
              Total saving of {props.savingPercent}% on this order
            </span>
          </div>
        </div>
      )}

      <hr className="summary__divider summary__divider--payable" />

      <div className="summary__row summary__row--payable">
        <span>Payable Amount</span>
        <span>{formatINR(props.payable)}</span>
      </div>
    </section>
  );
}
