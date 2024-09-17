import React from 'react';

const Step2 = ({ formik }) => (
  <div className="form-step">
    <h2>Step 2: Address Information</h2>

    <input
      type="text"
      name="address"
      placeholder="Address"
      value={formik.values.address}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    />
    {formik.touched.address && formik.errors.address ? (
      <p>{formik.errors.address}</p>
    ) : null}

    <input
      type="text"
      name="city"
      placeholder="City"
      value={formik.values.city}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    />
    {formik.touched.city && formik.errors.city ? (
      <p>{formik.errors.city}</p>
    ) : null}

    <input
      type="text"
      name="zip"
      placeholder="Zip Code"
      value={formik.values.zip}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    />
    {formik.touched.zip && formik.errors.zip ? (
      <p>{formik.errors.zip}</p>
    ) : null}
  </div>
);

export default Step2;
