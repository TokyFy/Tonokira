import React, {FunctionComponent} from "react";

interface OwnProps {
}

type Props = OwnProps;

const Copyright: FunctionComponent<Props> = (props) => {
    return (
        <div className={"group text-neutral-400 font-medium hover:text-neutral-700"}>
            <p>
                /* Hello (~-~) , <br/>
                /* Here you can search for your favorite song <br/>
                /* Get the lyrics <br/>
                /* <del>Get the mp3 [120kb] files </del><br/>
                /* Enjoy <br/>
                /* Made with {"<3"} by <a href={"toky.vercel.app"} target={"_blank"} className="font-bold group-hover:text-purple-500"> Toky</a><br/>
                /* <a href={"toky.vercel.app"} target={"_blank"} className="font-bold group-hover:text-purple-500"> Github</a> <br/>
            </p>
        </div>
    );
};

export default Copyright;
