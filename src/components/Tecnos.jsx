import { DiIllustrator } from "react-icons/di"
import { FiFigma } from "react-icons/fi"
import { RiBootstrapFill, RiCss3Fill, RiCss3Line, RiHtml5Fill, RiJavascriptFill, RiNeteaseCloudMusicFill, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri"
import { SiAdobexd } from "react-icons/si"



const Tecnos = () => {
  return (
    <div className="pb-24">
        <h2 className="flex flex-wrap items-center justify-center gap-4">Tecnologías</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div>
                <RiHtml5Fill className="text-7xl text-white-400"/>
            </div>
            <div className="p-4">
                <RiCss3Fill className="text-7xl text-white-400"/>
            </div>
            <div className="p-4">
                <RiJavascriptFill className="text-7xl text-white-400"/>
            </div>
            <div className="p-4">
                <RiReactjsFill className="text-7xl text-white-400"/>
            </div>
            <div className="p-4">
                <RiTailwindCssFill className="text-7xl text-white-400"/>
            </div>
            <div className="p-4">
                <RiBootstrapFill className="text-7xl text-white-400"/>
            </div>
            <div className="p-4">
                <FiFigma className="text-7xl text-white-400"/>
            </div>
            <div className="p-4">
                <SiAdobexd className="text-7xl text-white-400"/>
            </div>
            <div className="p-4">
                <DiIllustrator className="text-7xl text-white-400"/>
            </div>

        </div>
    </div>
  )
}

export default Tecnos