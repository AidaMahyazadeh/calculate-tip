import React from "react";

function BillInput({ bill, setBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        style={{
          borderRadius: "2rem",
          marginLeft: "2rem",
          marginBottom: "1rem",
        }}
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(event) => setBill(Number(event.target.value))}
      />
    </div>
  );
}

export default BillInput;
