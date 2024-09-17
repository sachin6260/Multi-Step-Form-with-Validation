import React from 'react';

const Step1 = ({ formik }) => (
  <div className="form-step">
    <h2>Step 1: Personal Information</h2>

    <input
      type="text"
      name="name"
      placeholder="Name"
      value={formik.values.name}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    />
    {formik.touched.name && formik.errors.name ? (
      <p>{formik.errors.name}</p>
    ) : null}

    <input
      type="email"
      name="email"
      placeholder="Email"
      value={formik.values.email}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    />
    {formik.touched.email && formik.errors.email ? (
      <p>{formik.errors.email}</p>
    ) : null}
  </div>
);

export default Step1;
