import { useRouter } from "next/navigation";

export default function Sidebar({ isOpen }) {

  const router = useRouter();

  const signOut = () => {
    localStorage.removeItem('token');
    router.push("/admin_login");
  }

  return (
    <div
      className={`bg-[#1D242E] sm:w-[10%] h-full flex flex-col justify-start content-center md:ml-0 md:relative transition-all duration-300 md:transition-none ${isOpen ? " w-[10%] absolute ml-[-10%]" : ""
        }`}
    >
      <div className="px-6 py-10 text-lg font-semibold leading-normal flex justify-center items-center">
        <h2 className="text-center text-white 2xl:text-2xl">Admin</h2>
      </div>
      <div className="bg-[#283342] h-full w-auto flex flex-col justify-between items-stretch content-center">
        <ul className="content-center">
          <a href="/admin_page/RPLD" className="text-white">
            <li className="py-5 text-center 2xl:text-xl hover:bg-[#009099]">
              RPLD
            </li>
          </a>
          <a href="/admin_page/ELINS" className="text-white">
            <li className="py-5 text-center 2xl:text-xl hover:bg-[#009099]">
              ELINS
            </li>
          </a>
          <a href="/admin_page/SKJ" className="text-white">
            <li className="py-5 text-center 2xl:text-xl hover:bg-[#009099]">
              SKJ
            </li>
          </a>
          <a href="/admin_page/ALGOKOM" className="text-white">
            <li className="py-5 text-center 2xl:text-xl hover:bg-[#009099]">
              ALGOKOM
            </li>
          </a>
          <a href="/admin_page/SC" className="text-white">
            <li className="py-5 text-center 2xl:text-xl hover:bg-[#009099]">
              SC
            </li>
          </a>
        </ul>
        <div className="Log Out Button">
          <div
            style={{ cursor: "pointer" }}
            onClick={() => signOut()}
            className=" text-white p-[5px] py-2 mx-[10px] mb-5 bg-teal-600 rounded-md text-[12px] 2xl:text-base lg:text-[10px] font-normal flex justify-center  text-center items-center"
          >
            Keluar
          </div>
          <div className="bg-[#1D242E] h-[30px] md:h-[40px] 2xl:h-[45px] text-white text-opacity-70 text-[10px] md:text-[12px] 2xl:text-base lg:text-[10px] text-center font-normal flex justify-center items-center">
            OMAHTI @ 2023
          </div>
        </div>
      </div>
    </div>
  );
}
