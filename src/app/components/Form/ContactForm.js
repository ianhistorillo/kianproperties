"use client";

import react from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div id="contact-me" className="contact-me-page">
      <div className="i-col100 i-fl">
        <div className="contact-form">
          <h1> Huge Opportunity</h1>
          <p>
            Don't let this window of opportunity close. Register your interest
            to receive exclusive information about the latest land releases of
            for sale properties.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("firstName", { required: true })}
              placeholder="First Name*"
              aria-invalid={errors.firstName ? "true" : "false"}
            />
            {errors.firstName?.type === "required" && (
              <p role="alert">First name is required</p>
            )}
            <input
              {...register("lastName", { required: true })}
              placeholder="Last Name*"
              aria-invalid={errors.lastName ? "true" : "false"}
            />
            {errors.lastName?.type === "required" && (
              <p role="alert">Last name is required</p>
            )}
            <input
              {...register("mail", { required: "Email Address is required" })}
              placeholder="Email*"
              aria-invalid={errors.mail ? "true" : "false"}
            />
            {errors.mail && <p role="alert">{errors.mail.message}</p>}
            <input
              type="number"
              {...register("phone", {
                required: "Invalid phone number",
                minLength: 11,
              })}
              placeholder="Phone*"
              aria-invalid={errors.phone ? "true" : "false"}
            />
            {errors.phone && <p role="alert">Invalid phone number</p>}
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
