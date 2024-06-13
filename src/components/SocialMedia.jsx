import { Link } from "@material-ui/core";

export function SocialMedia() {
  return (
    <>
      <div className="flex flex-row gap-2 absolute z-2 h-auto left-2 top-2">
        <Link to="https://wa.me/6281510254631" className="cursor-pointer">
          <img
            src="https://static-00.iconduck.com/assets.00/whatsapp-icon-509x512-c9csi2fs.png"
            alt=""
            className="w-10 hover:bg-white rounded p-1 duration-300 ease-in-out"
          />
        </Link>
        <Link to="https://github.com/RenderDek90" className="cursor-pointer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt=""
            className="w-10 hover:bg-white rounded p-1 duration-300 ease-in-out"
          />
        </Link>
      </div>
    </>
  );
}
