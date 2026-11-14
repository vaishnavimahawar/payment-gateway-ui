export default function MerchantHeader({ name }: { name: string }) {
  return (
    <header className="merchant">
      <p className="merchant__label">Paying to</p>
      <h1 className="merchant__name">{name}</h1>
    </header>
  );
}
