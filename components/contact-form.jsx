import { useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useTranslation } from "next-i18next";
import * as Yup from "yup";
import {
  sendContactForm,
  emailExist,
  discordUserExist,
} from "../services/contact.service";
import { Terminal } from "../components/terminal";
import Link from "next/link";
import { Button } from "./button";

export function ContactForm() {
  const [isValidCaptcha, setIsValidCaptcha] = useState(false);
  const [isSubmmitionFail, setIsSubmmitionFail] = useState(false);
  const [isSubmmitionSuccess, setIsSubmmitionSuccess] = useState(false);
  const { t } = useTranslation("common");

  const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, t("validations.shotMessage"))
      .max(50, t("validations.longMessage"))
      .required(t("validations.required")),
    discord: Yup.string()
      .trim()
      .matches(/^.{3,32}#[0-9]{4}$/, t("validations.invalidFormat"))
      .required(t("validations.required")),
    email: Yup.string()
      .email(t("validations.invalidFormat"))
      .required(t("validations.required")),
    message: Yup.string()
      .min(350, t("validations.shotMessage"))
      .required(t("validations.required")),
  });

  function handleVerificationSuccess(token, ekey) {
    setIsValidCaptcha(true);
  }

  return (
    <>
      <div className="w-full mx-auto mt-4 max-w-7xl">
        <h2 className="text-2xl px-3 flex flex-wrap py-4 bg-white rounded-md">
          Beta de{" "}
          <span className="text-blue-400 font-bold pl-2">
            Dubai Latam Discord Bot.
          </span>
        </h2>
      </div>
      <Terminal title="Dubai Latam">
        <Formik
          initialValues={{ email: "", name: "", message: "", discord: "" }}
          validationSchema={ContactFormSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            setIsSubmmitionSuccess(false);
            setIsSubmmitionFail(false);
            sendContactForm(values)
              .then(function (response) {
                setIsSubmmitionSuccess(true);
                setSubmitting(false);
                return response;
              })
              .catch(function (error) {
                setIsSubmmitionFail(true);
                setSubmitting(false);
                return error;
              });
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
            isValid,
            setErrors,
            setFieldError,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} className="py-4">
              <div className=" flex flex-wrap mb-6">
                <div className=" w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    {t("email")}
                  </label>
                  <Field
                    type="email"
                    name="email"
                    className="appearance-none block w-full bg-gray-200 text-gray border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    placeholder="********@*****.**"
                    onBlur={async (e) => {
                      handleBlur(e);
                      const res = await emailExist(e.target.value);
                      if (res.data.status === "exist") {
                        setFieldError("email", "El correo ya está asociado");
                      }
                    }}
                  />
                  <ErrorMessage
                    className="text-red-500"
                    name="email"
                    component="div"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                  >
                    {t("name")}
                  </label>
                  <Field
                    type="name"
                    name="name"
                    className="appearance-none block w-full bg-gray-200 text-gray border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Nick"
                  />
                  <ErrorMessage
                    className="text-red-500"
                    name="name"
                    component="div"
                  />
                </div>
              </div>
              <div className="flex flex-wrap mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    {t("discord")}
                  </label>
                  <Field
                    type="discord"
                    name="discord"
                    className="appearance-none block w-full bg-gray-200 text-gray border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    type="text"
                    placeholder="********#*****"
                    onBlur={async (e) => {
                      handleBlur(e);
                      const res = await discordUserExist(e.target.value);
                      if (res.data.status === "exist") {
                        setFieldError("discord", "El usuario ya está asociado");
                      }
                    }}
                  />
                  <ErrorMessage
                    className="text-red-500"
                    name="discord"
                    component="div"
                  />
                </div>
              </div>

              <div className="flex flex-wrap">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    {t("reason")}
                  </label>
                  <Field
                    type="message"
                    name="message"
                    as="textarea"
                    rows="10"
                    className="appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                  <ErrorMessage
                    className="text-red-500"
                    name="message"
                    component="div"
                  />
                </div>
                <div className="flex flex-wrap mx-1 mt-4 mb-6">
                  <div className="w-full px-3">
                    <HCaptcha
                      sitekey={process.env.captcha.apiKey}
                      onVerify={(token, ekey) =>
                        handleVerificationSuccess(token, ekey)
                      }
                    />
                  </div>
                </div>

                <div className="flex justify-between w-full px-3">
                  {!isSubmmitionSuccess && (
                    <button
                      disabled={!isValid || !isValidCaptcha || isSubmitting}
                      className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none disabled:opacity-50 text-white font-bold py-2 px-6 mr-4 rounded"
                      type="submit"
                    >
                      {!isSubmitting && t("send")}
                      {isSubmitting && t("loading")}
                    </button>
                  )}
                  {isSubmmitionSuccess && (
                    <p className="text-green-500 font-bold">
                      Gracias por comunicarte con nosotros, pronto nos podremos
                      en contacto contigo.
                    </p>
                  )}
                  {isSubmmitionFail && (
                    <p className="text-red-500 font-bold">
                      Hubo un error al enviar el formulario, intenta nuevamente
                      en unos instantes.{" "}
                    </p>
                  )}
                </div>
              </div>
            </form>
          )}
        </Formik>
      </Terminal>
    </>
  );
}
