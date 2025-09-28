import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Course Application Form</h1>

      <Formik
        initialValues={{
          fullName: "",
          email: "",
          password: "",
          course: "",
          gender: "",
          dob: "",
          city: "",
          country: "",
          phone: "",
          education: "",
          address: "",
          state: "",
          zip: "",
        }}
        validate={(values) => {
          const errors = {};

          // Full Name
          if (!values.fullName.trim()) {
            errors.fullName = "Full name is required";
          }

          // Email
          if (!values.email) {
            errors.email = "Email is required";
          } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
            errors.email = "Invalid email address";
          }

          // Password
          if (!values.password) {
            errors.password = "Password is required";
          } else if (values.password.length < 6) {
            errors.password = "Password must be at least 6 characters";
          }

          // Course
          if (!values.course) {
            errors.course = "Please select a course";
          }

          // Gender
          if (!values.gender) {
            errors.gender = "Please select gender";
          }

          // Date of Birth
          if (!values.dob) {
            errors.dob = "Date of birth is required";
          }

          // City
          if (!values.city) {
            errors.city = "City is required";
          }

          // Country
          if (!values.country) {
            errors.country = "Country is required";
          }

          // Zip Code
          if (values.zip && !/^\d+$/.test(values.zip)) {
            errors.zip = "Zip Code must contain only numbers";
          }

          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          alert(JSON.stringify(values, null, 2));
          resetForm();
        }}
      >
        {() => (
          <Form className="form">
            {/* Full Name */}
            <div>
              <label>Full Name:</label>
              <Field name="fullName" type="text" />
              <ErrorMessage name="fullName" component="div" className="error" />
            </div>

            {/* Email */}
            <div>
              <label>Email:</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            {/* Password */}
            <div>
              <label>Password:</label>
              <Field name="password" type="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            {/* Course */}
            <div>
              <label>Course:</label>
              <label>
                <Field type="radio" name="course" value="Course A" /> Course A
              </label>
              <label>
                <Field type="radio" name="course" value="Course B" /> Course B
              </label>
              <label>
                <Field type="radio" name="course" value="Course C" /> Course C
              </label>
              <ErrorMessage name="course" component="div" className="error" />
            </div>

            {/* Gender */}
            <div>
              <label>Gender:</label>
              <label>
                <Field type="radio" name="gender" value="Male" /> Male
              </label>
              <label>
                <Field type="radio" name="gender" value="Female" /> Female
              </label>
              <ErrorMessage name="gender" component="div" className="error" />
            </div>

            {/* Date of Birth */}
            <div>
              <label>Date of Birth:</label>
              <Field name="dob" type="date" />
              <ErrorMessage name="dob" component="div" className="error" />
            </div>

            {/* City */}
            <div>
              <label>City:</label>
              <Field name="city" type="text" />
              <ErrorMessage name="city" component="div" className="error" />
            </div>

            {/* Country */}
            <div>
              <label>Country:</label>
              <Field as="select" name="country">
                <option value="">Select Country</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="India">India</option>
                <option value="Kazakhstan">Kazakhstan</option>
              </Field>
              <ErrorMessage name="country" component="div" className="error" />
            </div>

            {/* Phone */}
            <div>
              <label>Phone:</label>
              <Field name="phone" type="text" />
            </div>

            {/* Education */}
            <div>
              <label>Education:</label>
              <Field as="select" name="education">
                <option value="">Select Education</option>
                <option value="School">School</option>
                <option value="College">College</option>
                <option value="University">University</option>
              </Field>
            </div>

            {/* Address */}
            <div>
              <label>Address:</label>
              <Field as="textarea" name="address" />
            </div>

            {/* State */}
            <div>
              <label>State:</label>
              <Field name="state" type="text" />
            </div>

            {/* Zip */}
            <div>
              <label>Zip Code:</label>
              <Field name="zip" type="text" />
              <ErrorMessage name="zip" component="div" className="error" />
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
