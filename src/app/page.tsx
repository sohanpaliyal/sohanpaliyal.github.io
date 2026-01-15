import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Tech from "@/components/sections/tech";
import Works from "@/components/sections/works";
import Contact from "@/components/sections/contact";
import StarsWrapper from "@/components/canvas/stars-wrapper";
// import Guestbook from "@/components/sections/guestbook";

export default function Home() {
    return (
        <main className="flex flex-col">
            <Hero />
            <About />
            <Experience />
            <Tech />
            <Works />
            {/* <Guestbook /> */}
            <div className="relative z-0">
                <Contact />
                <StarsWrapper />
            </div>
        </main>
    );
}
