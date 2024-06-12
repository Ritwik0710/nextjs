import { forwardRef, useState } from "react";

function Search(ref) {

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        // placeholder={placeholder}
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        value={inputval}
      
        ref={ref}
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
      >
        Search
      </button>
    </div>
  );
}
export default forwardRef(Search);
