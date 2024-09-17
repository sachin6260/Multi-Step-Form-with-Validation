import React, { useState } from 'react';
import { useFormik } from 'formik';
import validationSchema from '../validation/validationSchema';
import Step1 from '../components/FormSteps/Step1';
import Step2 from '../components/FormSteps/Step2';
import Step3 from '../components/FormSteps/Step3';
import Step4 from '../components/FormSteps/Step4';
import ProgressBar from '../components/ProgressBar';
import '../styles/FormStyles.css';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      address: '',
      city: '',
      zip: '',
      cardNumber: '',
      billingAddress: '',
    },
    validationSchema: validationSchema,
    validateOnChange: false,
    validateOnBlur: true,
    context: { isStep1: currentStep === 1, isStep2: currentStep === 2, isStep3: currentStep === 3 },
    onSubmit: (values) => {
      console.log('Form submitted:', values);
    },
  });

  const handleNext = () => {
    formik.validateForm().then(() => {
      console.log("Formik Errors:", formik.errors);

      const errors = formik.errors;
      let stepIsValid = false;

      if (currentStep === 1) {
        stepIsValid = !errors.name && !errors.email;
      } else if (currentStep === 2) {
        stepIsValid = !errors.address && !errors.city && !errors.zip;
      } else if (currentStep === 3) {
        stepIsValid = !errors.cardNumber && !errors.billingAddress;
      }

      if (stepIsValid) {
        if (currentStep === totalSteps) {
          formik.handleSubmit(); // Trigger form submission
        } else {
          setCurrentStep(prevStep => prevStep + 1);
        }
      }
    });
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prevStep => prevStep - 1);
    }
  };

  const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="multi-step-form">
      <ProgressBar currentStep={currentStep - 1} totalSteps={totalSteps} />
      
      {currentStep === 1 && <Step1 formik={formik} />}
      {currentStep === 2 && <Step2 formik={formik} />}
      {currentStep === 3 && <Step3 formik={formik} />}
      {currentStep === 4 && <Step4 formik={formik} />}

      <div className="navigation-buttons">
        {currentStep > 1 && (
          <button type="button" onClick={handlePrevious}>
            Previous
          </button>
        )}
        <button type="button" onClick={handleNext}>
          {currentStep === totalSteps ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default MultiStepForm;
