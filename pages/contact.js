import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout";

const Contact = ({ email_id, client_id, template_id }) => {
  return (
    <Layout>
      <div className="mb-10">
        <ContactForm
          email_id={email_id}
          client_id={client_id}
          template_id={template_id}
        />
      </div>
    </Layout>
  );
};
export const getStaticProps = () => {
  return {
    props: {
      email_id: process.env.EMAIL_ID,
      client_id: process.env.CLIENT_ID,
      template_id: process.env.TEMPLATE_ID,
    },
  };
};
export default Contact;
