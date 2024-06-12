import { forwardRef, useEffect, useState } from "react";

const Checkbox = (props) => {
  const [val, setval] = useState(false);

  useEffect(() => {
    props.handleChange?.(val);
  }, [val]);

  return (
    <div className="form-check">
      <input
        style={{ borderColor: "lightgrey" }}
        className="form-check-input"
        type="checkbox"
        id={props.id}
        value={val}
        onChange=
        {() => setval(!val)}
      />
    </div>
  );
};
export default Checkbox;
