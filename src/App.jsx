import VirtualCard from "./components/VirtualCard";

function App() {
  const paragraph =
    "My passion for learning constantly drives me to explore new horizons and expand my skill set. Having an experience in Designing helps me to pursue in making a creative website. Combining creativity and other ability is such an interesting discovery.";

  const data = {
    name: "Darren Ezra",
    positions: ["Full Stack Developer", "UI UX Enthusiast"],
    skills: ["React JS", "Laravel"],
    socialMedia: [
      {
        name: "whatsapp",
        link: "https://wa.me/6281510254631"
      },
      {
        name: "github",
        link: "https://github.com/RenderDek90/"
      }
    ],
    story: paragraph,
    motto: "Make your own story"
  };

  return (
    <>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-5 min-h-screen flex flex-row justify-center items-center">
        <VirtualCard props={data} />
      </div>
    </>
  );
}

export default App;
