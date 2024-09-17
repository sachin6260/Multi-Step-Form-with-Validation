import React from 'react';

const Step3 = ({ formik }) => (
  <div className="form-step">
    <h2>Step 3: Payment Information</h2>
    
    <input
      type="text"
      name="cardNumber"
      placeholder="Card Number"
      value={formik.values.cardNumber}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    />
    {formik.touched.cardNumber && formik.errors.cardNumber ? (
      <p>{formik.errors.cardNumber}</p>
    ) : null}

    <input
      type="text"
      name="billingAddress"
      placeholder="Billing Address"
      value={formik.values.billingAddress}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    />
    {formik.touched.billingAddress && formik.errors.billingAddress ? (
      <p>{formik.errors.billingAddress}</p>
    ) : null}
  </div>
);

export default Step3;
