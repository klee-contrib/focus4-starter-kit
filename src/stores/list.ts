import {ListStore} from "autofocus/list";

import {loadList} from "../services/list";

export const listStore = new ListStore(loadList);
