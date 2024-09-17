import React from "react";

const Step4 = ({ formik }) => (
  <div className="form-step">
    <h2>Step 4: Review and Submit</h2>
    
    <div className="review-section">
      <h3>Personal Information</h3>
      <p><strong>Name:</strong> {formik.values.name}</p>
      <p><strong>Email:</strong> {formik.values.email}</p>

      <h3>Address Information</h3>
      <p><strong>Address:</strong> {formik.values.address}</p>
      <p><strong>City:</strong> {formik.values.city}</p>
      <p><strong>Zip Code:</strong> {formik.values.zip}</p>

      <h3>Payment Information</h3>
      <p><strong>Card Number:</strong> **** **** **** {formik.values.cardNumber.slice(-4)}</p>
      <p><strong>Billing Address:</strong> {formik.values.billingAddress}</p>
    </div>

    <div className="confirmation-message">
      <p>Please review your information carefully before submitting.</p>
    </div>
  </div>
);

export default Step4;
