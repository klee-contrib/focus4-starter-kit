import {React, observer} from "autofocus";

import {EvenementData} from "../../model/main/evenement";

export const EvenementLine = observer(({data}: {data?: EvenementData}) => {
    return (
        <div>{data!.commentaire}</div>
    );
});
