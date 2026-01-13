import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Blogs, BlogDetail } from "./components";

const Portfolio = () => {
  return (
    <div className='relative z-0'>
      <div className='mesh-gradient' />
      <div>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/blog" element={
          <div className='relative z-0 bg-primary min-h-screen'>
            <Navbar />
            <div className='pt-28 pb-10'>
              <Blogs />
            </div>
            <StarsCanvas />
          </div>
        } />
        <Route path="/blog/:id" element={
          <div className='relative z-0 bg-primary min-h-screen'>
            <Navbar />
            <div className='pt-20 pb-10'>
              <BlogDetail />
            </div>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
