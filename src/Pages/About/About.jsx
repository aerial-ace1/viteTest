import { Navbar } from "../../Components";

const About = ()=>{
    return (
        <div style={{height:"100vh",overflowY:"clip"}}>
            <Navbar/>

            <div style={{background: "url(/watermark.png)", backgroundRepeat: "no-repeat", backgroundSize: "cover",height:"100vh",display:"flex",flexFlow:"column",alignItems:"center",justifyContent:"center"}}>
                <h1>About</h1>
                <h3 style={{padding:"5rem 15rem", textAlign:"center"}}>Welcome to the ECO TRACK, the ultimate tool for monitoring and reducing your online carbon footprint. Our innovative platform uses open-source API's to calculate the carbon emissions generated by your internet usage. Each time you visit a website, our tracker runs in the background, calculating the data usage and energy consumption required to load the page. With this information, we can provide you with a real-time measurement of your carbon footprint and give you insights into how you can reduce your impact.

                Our platform is user-friendly and intuitive, making it easy to track and reduce your carbon footprint. Whether you're an individual or a business, we believe that every small step counts in the fight against climate change. With our ECO TRACK, you'll be able to see the tangible impact of your actions and take meaningful steps to reduce your carbon footprint. Join us today in making a difference and help reduce your impact on the planet.</h3>
            </div>
        </div>)
}

export default About;