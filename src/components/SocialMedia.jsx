export function SocialMedia() {
  return (
    <>
      <div className="flex flex-row gap-2 absolute z-2 h-auto left-2 top-2">
        <button
          onClick={() => {
            window.open("https://wa.me/6281510254631", "_blank");
          }}
          className="cursor-pointer"
        >
          <img
            src="https://static-00.iconduck.com/assets.00/whatsapp-icon-509x512-c9csi2fs.png"
            alt=""
            className="w-10 hover:bg-white rounded p-1 duration-300 ease-in-out"
          />
        </button>
        <button
          onClick={() => {
            window.open("https://github.com/RenderDek90", "_blank");
          }}
          className="cursor-pointer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt=""
            className="w-10 hover:bg-white rounded p-1 duration-300 ease-in-out"
          />
        </button>
        <button
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/darren-ezra-9090/",
              "_blank"
            );
          }}
          className="cursor-pointer"
        >
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/free-linkedin-46-189755.png?f=webp&w=256"
            alt=""
            className="w-10 hover:bg-white rounded p-1 duration-300 ease-in-out"
          />
        </button>
      </div>
    </>
  );
}
