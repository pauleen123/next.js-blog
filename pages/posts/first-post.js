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
    
    <h1 className="h1">Get to know me!</h1>
     <p className="p1">My name is Pauline Muthoni Gitonga. </p>
     <p className="p2">Welcome to my <span color="red">life</span> </p>
     <p className="p3">Check out this link to my personal portfolio to get to see my 
      projects and skills in Software Engineering! 😀</p>
  </Layout>
);
}