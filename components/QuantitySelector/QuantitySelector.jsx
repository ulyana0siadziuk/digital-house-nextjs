import { useState } from "react";
import PropTypes from "prop-types";
import { Button, FormControl, InputGroup } from "react-bootstrap";

function QuantitySelector({
  min = 1,
  max = 99,
  disabled = false,
  className = "mx-auto",
  onChange,
}) {
  const [quantity, setQuantity] = useState(min);

  const decrease = () => {
    if (!disabled && quantity > min) {
      const next = quantity - 1;
      setQuantity(next);
      onChange?.(next);
    }
  };

  const increase = () => {
    if (!disabled && quantity < max) {
      const next = quantity + 1;
      setQuantity(next);
      onChange?.(next);
    }
  };

  return (
    <InputGroup className={className} style={{ maxWidth: 140 }}>
      <Button
        variant="outline-primary"
        onClick={decrease}
        disabled={disabled || quantity <= min}
        aria-label="Уменьшить"
      >
        −
      </Button>
      <FormControl
        className="text-center fw-semibold"
        value={quantity}
        readOnly
        disabled={disabled}
        aria-label="Количество"
      />
      <Button
        variant="outline-primary"
        onClick={increase}
        disabled={disabled || quantity >= max}
        aria-label="Увеличить"
      >
        +
      </Button>
    </InputGroup>
  );
}

QuantitySelector.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

export default QuantitySelector;
