import React, { useState } from "react";
import { Formik } from "formik";
import Dropzone from "react-dropzone";
import emailjs from 'emailjs-com'

import "./Header.css";

import DragNDropIcon from "../../assets/img/drag-drop-icon.svg";

const JobApplication = ({ applyBtnStyle }) => {
  const [fileNames, setFileNames] = useState([]);
  const handleDrop = (acceptedFiles) =>
    setFileNames(acceptedFiles.map((file) => file.name));

  return (
    <div className="form-wrapper">
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout((e) => {
            alert(JSON.stringify(values, null, 2));
            emailjs.sendForm(
              "service_pxh457i",
              "template_gpycq4n",
              e.target,
              "user_HiIFdOLlDrZNyrCGNQo0Q"
            ).then(res=>{
              console.log(res)
            });
            setSubmitting(false);
          }, 400);
          console.log(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="job-app-form-fields-wrap">
              {/* Full name */}
              <div>
                <input
                  type="text"
                  name="user_name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fullName}
                  placeholder="Business Name"
                  className="mb-3"
                />
              </div>

              {/* email */}
              <div>
                <input
                  type="email"
                  name="user_email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Email"
                  className="mb-3"
                />
                {errors.email && touched.email && errors.email}
              </div>

              {/* Phone number */}
              <div>
                <input
                  type="tel"
                  name="mobile"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.mobile}
                  placeholder="Mobile"
                  className="mb-3"
                />
              </div>

              {/* Select Project Type */}
              <div className="">
                <select name="project category" className="mb-3">
                  <option value="">Project Category : </option>
                  <option value="Web App">Web App</option>
                  <option value="Mobile App">Mobile App</option>
                  <option value="Full Stack">Full Stack App</option>
                  <option value="Automation">Automation</option>
                </select>
              </div>
            </div>

            {/* User message */}
            <div>
              <input
                type="text"
                name="user_message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullName}
                placeholder="Please describe your project in two paragraphs..."
                className="mb-3 text-area"
              />
              {/* {errors.email && touched.email && errors.email} */}
            </div>

            {/* Handle drag and drop */}
            <Dropzone
              onDrop={handleDrop}
              accept="document/pdf"
              minSize={1024}
              maxSize={3072000}
            >
              {({
                getRootProps,
                getInputProps,
                isDragActive,
                isDragAccept,
                isDragReject,
              }) => {
                const additionalClass = isDragAccept
                  ? "accept"
                  : isDragReject
                  ? "reject"
                  : "";

                return (
                  <div
                    {...getRootProps({
                      className: `dropzone ${additionalClass}`,
                    })}
                  >
                    <div className="drag-drop-area">
                      <input {...getInputProps()} />
                      <span className="my-4">
                        {isDragActive ? (
                          <img src={DragNDropIcon} alt="" />
                        ) : (
                          <img src={DragNDropIcon} alt="" />
                        )}
                      </span>
                      <p className="text-center">
                        Drag or Click to Upload your Project brief (PDF)
                      </p>
                    </div>
                  </div>
                );
              }}
            </Dropzone>
            <div>
              <ul>
                {fileNames.map((fileName) => (
                  <li key={fileName}>{fileName}</li>
                ))}
              </ul>
            </div>

            {/* call to action - Btn */}
            <div>
              <button
                className={applyBtnStyle}
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default JobApplication;
