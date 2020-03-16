import preact from "/web_modules/preact/compat.js";

export default function Title({
  label,
  active
}: {
  label?: string;
  active?: boolean;
}) {
  return <h1 style={{ color: active ? "red" : "initial" }}>{label}</h1>;
}
