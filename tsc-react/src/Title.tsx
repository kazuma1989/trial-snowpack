import * as React from "react";

export default function Title({
  label,
  active
}: {
  label?: string;
  active?: boolean;
}) {
  return <h1 style={{ color: active ? "red" : "initial" }}>{label}</h1>;
}
