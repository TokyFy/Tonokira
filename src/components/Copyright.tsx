import React, {FunctionComponent} from "react";

interface OwnProps {
}

type Props = OwnProps;

const Copyright: FunctionComponent<Props> = (props) => {
    return (
        <div className={"group text-neutral-400 font-medium hover:text-neutral-700 dark:text-gray-600 dark:hover:text-gray-400"}>
            <p>
                Hello (~-~) , <br/>
                Yet another Lyrics finder App...<br/>
            </p>
        </div>
    );
};

export default Copyright;
