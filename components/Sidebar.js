import Button from "./Button";

const SideBar = ({ className}) => {
    return (
        <section className={`${className} `}>
        <h2 className=" text-2xl py-4 font-semibold">Accounts Center</h2>

        <div>Manage your connected experiences and account settings across Meta technologies like Facebook, Instagram and Meta Horizon.</div>

        <a href="" className="text-blue-600 font-bold hover:underline">Learn more</a>

        <div className="flex flex-1 flex-col text-left">
            <Button className="py-4" to={"Profiles"}/>
            <Button className="py-4" to={"Connected experiences"}/>
            
            <span className="my-4">Account settings</span>

            <Button className="py-4" to={"Password and security"}/>
            <Button className="py-4" to={"Personal details"}/>
            <Button className="py-4" to={"Your information and permissions"}/>
            <Button className="py-4" to={"Ad preferences"}/>
            <Button className="py-4" to={"Meta Pay"}/>
            <Button className="py-4" to={"Show your profile is verified"}/>
            <Button className="py-4" to={"Accounts"}/>
        </div>
    </section>
    );
  };
  
  export default SideBar;