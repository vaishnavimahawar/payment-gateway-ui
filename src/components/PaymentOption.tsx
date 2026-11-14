import type { ReactNode } from 'react';
import { ChevronDown } from './icons';

type Props = {
  id: string;
  icon: ReactNode;
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
};

export default function PaymentOption({ id, icon, label, isOpen, onToggle, children }: Props) {
  return (
    <div className={'pay-option' + (isOpen ? ' is-open' : '')}>
      <button
        type="button"
        className="pay-option__header"
        aria-expanded={isOpen}
        aria-controls={`pay-option-${id}`}
        onClick={onToggle}
      >
        <span className="pay-option__icon">{icon}</span>
        <span className="pay-option__label">{label}</span>
        <ChevronDown className="chevron pay-option__chevron" />
      </button>
      {isOpen && (
        <div id={`pay-option-${id}`} className="pay-option__body">
          {children}
        </div>
      )}
    </div>
  );
}
