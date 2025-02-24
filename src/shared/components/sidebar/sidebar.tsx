import Image from "next/image";
import logo from '@shared/assets/icons/Group 3.png'

export const Sidebar = () => {
  return(
    <aside className="flex flex-col w-[72px] py-4 px-2">
      <div className="flex justify-center mt-4">
        <Image
          src={logo}
          alt='Ballwool'
        />        
      </div>

    </aside>
  )
}