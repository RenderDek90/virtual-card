import NewVirtualCard from './components/NewVirtualCard';
import VirtualCard from './components/VirtualCard';

function App() {
  const paragraph =
    'My passion for learning constantly drives me to explore new horizons and expand my skill set. Having an experience in Designing helps me to pursue in making a creative website. Combining creativity and other ability is such an interesting discovery.';

  const data = {
    name: 'Darren Ezra',
    positions: ['Full Stack Developer', 'UI UX Enthusiast'],
    skills: ['React JS', 'Laravel'],
    socialMedia: [
      {
        name: 'whatsapp',
        link: 'https://wa.me/6281510254631',
        image: 'https://static-00.iconduck.com/assets.00/whatsapp-icon-509x512-c9csi2fs.png'
      },
      {
        name: 'github',
        link: 'https://github.com/RenderDek90/',
        image: 'https://cdn-icons-png.flaticon.com/512/25/25231.png'
      },
      {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/darren-ezra-9090/',
        image: 'https://cdn.iconscout.com/icon/free/png-512/free-linkedin-46-189755.png?f=webp&w=256'
      }
    ],
    story: paragraph,
    motto: 'Make your own story',
    image: 'https://renderdek90.github.io/V2-DSITE/static/media/dardar4.8ee125f882d34493d631.jpeg'
  };

  return (
    <>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-5 min-h-screen flex flex-row justify-center items-center">
        <VirtualCard props={data} />
        <NewVirtualCard props={data} />
      </div>
    </>
  );
}

export default App;
