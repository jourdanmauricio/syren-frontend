import { fields, formChangePass, formsApp, initialValues } from './constants';

export const validatefield = (field, value) => {
  if (fields[field].required && (!value || value.toString().trim() === ''))
    return 'Requerido';

  if (value && !fields[field].regex.test(value)) return fields[field].msgError;

  return null;
};

export const validateForm = (form, formName) => {
  let validationErrors = initialValues[formName];

  const formFields = formsApp[formName];

  for (const field of formFields) {
    const formField = form[field];

    validationErrors = {
      ...validationErrors,
      [field]: validatefield(field, formField),
    };
  }

  if (
    form['password'] !== form['confPass'] &&
    formChangePass.includes(formName)
  ) {
    validationErrors = {
      ...validationErrors,
      confPass: 'La contraseña no coincide',
    };
  }

  return validationErrors;
};
