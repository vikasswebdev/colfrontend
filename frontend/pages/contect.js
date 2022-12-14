import React, {useState} from "react";
import { fetchAPI } from "../lib/api";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import Head from "next/head";

const contect = ({ categories }) => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")





  const handleSubmit = async () => {

    const response = await fetch("http://localhost:1337/api/contects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify({
        data: {
          name: "vikas",
          email: "vikaspatendwjn@gmail.com",
          phone: "123456789"
        }
      }),

    });
   
    const data = await response.json();
    console.log("data", data);

    setName("")
    setEmail("")
    setPhone("")
  }

  const submitHandler =  (e) => {
     e.preventDefault()

    handleSubmit({
      name,
      email,
      phone
    })
    // const response = await fetchAPI("/contects", { 
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     data: {
    //       name: `${name}`,
    //       email: `${email}`,
    //       phone: `${phone}`,
    //     },
    //   }),
    // });
    // console.log("response", response);


  };

  return (
<>
    <Head>
    <title>Contect</title>
    </Head>


    <Layout categories={categories.data}>
      <div>
        <div>
          <h1>contect us</h1>
        </div>
        <div className={styles.formContainer}>
          <form className="form" onSubmit={submitHandler}>
             <div className={styles.formControl}>
               <label htmlFor="name" className="label">Name</label>
              <input type="text" required className="input" value={name} onChange={(e) => setName(e.target.value)}/>
             </div>
             <div className={styles.formControl}>
               <label htmlFor="email" className="label">Email</label>
              <input type='email' required className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
             </div>
             <div className={styles.formControl}>
               <label htmlFor="phone" className="label">Phone</label>
               <input type="number" className="input" value={phone} onChange={(e) => setPhone(e.target.value)}/>
             </div>
             <button type="submit">submit</button>
          </form>
        </div>
      </div>
    </Layout>
    </>
  );
};

export async function getStaticProps({ params }) {
  const categoriesRes = await fetchAPI("/categories");

  return {
    props: { categories: categoriesRes },
    revalidate: 1,
  };
}

export default contect;
