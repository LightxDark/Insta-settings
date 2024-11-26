import Link from "next/link"

const Button = ({ className, to, ...props }) => {
    const formattedTo = to.replace(/\s+/g, '-').toLowerCase();    
    return (
    <a href={`/${formattedTo}`} className="border rounded-2xl hover:bg-gray-200 px-4"> 
          
        <button className={`${className} ` } {...props}>
            {to}
        </button>
    </a>
    );
  };
  
  export default Button;