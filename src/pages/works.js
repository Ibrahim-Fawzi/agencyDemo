import React from "react";
import { Works, GenericH2 } from "../styles/IndexStyles";
import Layout from "../components/layout";
import Project from "../components/Project";
const project = [
    {image: 'printbill.jpg', title: "PrintBill", link: "https://www.printbill.in/"},
    {image: "sprung.jpg", title: "Sprung", link: "https://sprung.us"},
    {image: "orange.jpg", title: "Orange Health", link: "https://whispering-bastion-31600.herokuapp.com/"},
    {image: "billing.jpg", title: "Billing Restro", link: "https://billingrestro-react-prod.herokuapp.com/"},
    {image: "ferrarisports.jpg", title: "Ferrari Sports", link: "http://ferrarisports.com/"},
    {image: "pregnancy.jpg", title: "Pregnancy info", link: "http://pregnancy.info/"},
    {image: "jaagastudy.jpg", title: "Jaaga Study", link: "https://nabendu82.github.io/incognosco/index.html"},
    {image: "responsive1.jpg", title: "Responsive Site- POC", link: "https://shikhacorps.in/corps/"},
    {image: "responsive2.jpg", title: "Responsive Site2- POC", link: "https://shikhacorps.in/cssgridresponsive/"},
    {image: "styleconferences.jpg", title: "Style Conferences", link: "https://nabendu82.github.io/shayhowe/index.html"},
    {image: "itunes.jpg", title: "iTunes Clone - POC", link: "https://shikhacorps.in/mytunes/"},
    {image: "parallax.jpg", title: "Parallax Site - POC", link: "https://shikhacorps.in/parallaxsite/"},
    {image: "photography.jpg", title: "PhotoGraphy Site-POC", link: "https://shikhacorps.in/photographysite/"},
    {image: "yelpcamp.jpg", title: "YelpCamp", link: "https://hidden-coast-48928.herokuapp.com/"},
    {image: "blogsite.jpg", title: "Blog Site", link: "https://serene-wildwood-22136.herokuapp.com/blogs"},
    {image: "portfolio.jpg", title: "Portfolio Site", link: "https://nabendu82.github.io/"},
]

export default () => (
    <Layout>
    <Works>
    <GenericH2 no dark some style={{textAlign: 'center'}}>Our Works
   </GenericH2>
    <section class="gallery_flex">
    { project && project.map(proj => <Project key={proj.title} project={proj} />)}
    </section>
    </Works>
    </Layout>
   )