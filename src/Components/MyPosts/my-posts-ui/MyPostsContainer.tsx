import React from "react";
import {addPostAC, changePostTextAC, ProfilePageType, StoreStateType} from "../../../redux/store";
import {MyPosts} from "./MyPosts";
import {Dispatch} from "redux";
import {connect} from "react-redux";


/*type MyPostsPropsType = {
    store: Store
}

export const MyPostsContainer = (props: MyPostsPropsType) => {
    let state = props.store.getState()

    /!*let getElementValue = React.createRef<HTMLTextAreaElement>()*!/
    const dispatch = (action: ActionType) => {
        props.store.dispatch(action)
    }

    /!* let addPost = () => {
         alert(getElementValue.current?.value)
     }*!/
    /!*let a = ''
    let setPost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        a = e.currentTarget?.value
        return a
    }
    let addPost = () => {
        alert(a)
    }
*!/
    let addPost = (text: any) => {
        dispatch(addPostAC(text))
    }

    /!*let onChangePost=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        props.changePostText(e.currentTarget.value)
    }*!/
    let onChangePost = (text: any) => {
        dispatch(changePostTextAC(text))
    }
    return (
        <MyPosts posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}
                 addPost={addPost} onChangePost={onChangePost}/>
    )
}*/

type MapDispatchToPropsType = {
    addPost: (text: any) => void
    onChangePost: (text: any) => void
}
type MapStateToPropsType = ProfilePageType

const mapStateToProps = (state: StoreStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (text: any) => dispatch(addPostAC(text)),
        onChangePost: (text: any) => dispatch(changePostTextAC(text))
    }
}


export const MyPostsContainer = connect< MapStateToPropsType,MapDispatchToPropsType, {}, StoreStateType>(mapStateToProps, mapDispatchToProps)(MyPosts)

