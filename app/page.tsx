import SideBar from '../components/Sidebar'

export default function Home() {
    return (
        <div className="px-4 min-h-screen place-items-center">
            <div className="flex flex-1 w-1/2">
                <SideBar className="px-2 w-1/3"/>

                <hr className="bg-gray-950"/>

                <section className="  py-4 w-2/3 space-y-4">
                    <span className="font-semibold text-2xl">Profiles</span>

                    <div className="">Manage your profile info, and use the same info across this site and others. Add more profiles by adding your accounts. 
                        <span> <a href="" className="text-blue-600 font-bold hover:underline">Learn more</a></span>
                    </div>

                    <div className=" cursor-pointer border rounded-3xl">
                        <div className="flex p-4 hover:bg-gray-200 ">
                            <img src="https://preview.redd.it/9tufcn9pmxz41.png?auto=webp&s=89313bc19d1506ea7860551ad6c989cde6e8140c" alt=""  width={32} className="rounded-full w-1/12"/>
                            <div className="flex flex-col ">
                                <span className=" font-semibold">Your Account</span>
                                <span>This Site</span>
                            </div>

                            
                        </div>

                        <div className=" border-t p-4 hover:bg-gray-200 font-semibold text-blue-600">
                            Add Accounts
                        </div>

                    </div>
                    
                </section>
            </div>
        </div>
    );
}
