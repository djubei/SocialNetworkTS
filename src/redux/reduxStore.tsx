import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "../Components/Profile/profile-bll/profilePageReducer";
import {dialogsPageReducer} from "../Components/Dialogs/dialogs-bll/dialogPageReducer";
import {sideBarReducer} from "../Components/SideBar/sideBar-bll/sideBarReducer";
import {usersReducer} from "../Components/Users/users-bll/users-reducer";


let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer
})

export let store = createStore(reducers)

export type AppRootStateType = ReturnType<typeof reducers>
