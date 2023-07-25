import React from "react";

const Loading = () => {

    const load = [ 1,11,1,1,1,1,1,1,1,1,1,1,11,1,1,1,1]

  return <>
            <div className="listGrid">
                {load.map(() => (<div className="w-[100%] h-[300px]"></div>))}   
            </div>
        </>;
};

export default Loading;
