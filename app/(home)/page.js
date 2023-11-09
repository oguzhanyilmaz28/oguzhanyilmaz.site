import Header from "@/components/header";
import HomeLayout from "@/layouts/home"
import Contact from "@/layouts/contact"
import About from "@/layouts/about"
import Resume from "@/layouts/resume"
import Projects from "@/layouts/projects"

export default function Page() {
  return (
    <main className="w-full h-full">
      <HomeLayout />

      <About />

      <Resume />

      <Projects />

      <Contact />
    </main>
  )
}