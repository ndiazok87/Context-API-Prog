import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

const ModelForm = ({ initialValues, validationSchema, onSubmit, fields }) => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ isSubmitting, setFieldValue, values }) => (
        <Form className="p-6 space-y-4 bg-white shadow-md rounded-lg w-full max-w-2xl mx-auto">
          {fields.map(({ name, label, type = 'text', options }) => (
            <div key={name} className="flex flex-col gap-1">
              <label htmlFor={name} className="font-semibold text-gray-700">
                {label}
              </label>

              {type === 'select' && options ? (
                <Dropdown
                  inputId={name}
                  value={values[name]}
                  options={options}
                  onChange={(e) => setFieldValue(name, e.value)}
                  className="w-full"
                  placeholder="Selecciona una opción"
                />
              ) : (
                <Field name={name}>
                  {({ field }) => (
                    <InputText
                      {...field}
                      id={name}
                      type={type}
                      className="p-inputtext-sm w-full"
                      placeholder={`Ingrese ${label.toLowerCase()}`}
                    />
                  )}
                </Field>
              )}

              <ErrorMessage
                name={name}
                component="small"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          ))}

          <Button
            label={isSubmitting ? 'Guardando...' : 'Guardar'}
            icon="pi pi-check"
            type="submit"
            disabled={isSubmitting}
            className="w-full p-button-primary"
          />
        </Form>
      )}
    </Formik>
  );
};

export default ModelForm;
