import { ContactForm } from "../components/contact-form";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Layout } from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <ContactForm />
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "footer"])),
  },
});
