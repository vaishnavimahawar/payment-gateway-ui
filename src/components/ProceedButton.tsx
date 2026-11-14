type Props = { onClick: () => void };

export default function ProceedButton({ onClick }: Props) {
  return (
    <button type="button" className="proceed" onClick={onClick}>
      PROCEED TO PAY
    </button>
  );
}
