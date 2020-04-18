import { observer } from "mobx-react-lite";
import PeopleList from "./PeopleList";

const ObserverPeopleList = observer(PeopleList);

export { ObserverPeopleList as PeopleList };
