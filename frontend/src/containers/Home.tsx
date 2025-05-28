import AboutMe from "../components/Home/AboutMe";
import Certificate from "../components/Home/Certificate";
import EducationTimeLine from "../components/Home/EducationTimeLine";
import Projects from "../components/Home/Projects";
import Skills from "../components/Home/Skills";
import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <AboutMe />
      <Projects />
      <Skills />
      <EducationTimeLine />
      <Certificate />
    </Layout>
  );
}

export default Home;
