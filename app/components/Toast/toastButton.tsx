import { ButtonProps } from "@/types/interfaces";

const ToastButton:  React.FC<ButtonProps> = ({icon: Icon, clickEvent }) => {
  return <>
            <button
             className="text-xl p-0 m-0 text-white rounded-full grid place-items-center" 
             onClick={clickEvent}
            ><Icon/></button>
        

        </>
};

export default ToastButton;