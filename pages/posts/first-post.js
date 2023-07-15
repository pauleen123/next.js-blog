import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost(){
    return(
  <Layout>

   <Head>
    <title>First Post</title>
   </Head>
    
    <h1>Get to know me!</h1>
     <p>My name is Pauline Muthoni Gitonga. </p>
     <p>I have always loved technology and computers and 
      after dabbling in the world of Information Technology i 
      have settled in the field of Full-Stack Software Development. 
      I love to build and develop good looking and functioning web 
      applications </p>
     <p>Check out this link to my personal portfolio to get to see my 
      projects and skills.</p>
  </Layout>
);
}