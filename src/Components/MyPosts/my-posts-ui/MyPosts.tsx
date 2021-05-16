import React, {ChangeEvent, ChangeEventHandler} from "react";
import s from './MyPosts.module.css'
import {Post} from "../../Post/post-ui/Post";
import {PostsPropsType} from "../../../redux/state";


type MyPostsPropsType = {
    posts: Array<PostsPropsType>
    addPost: (postText: any) => void
    newPostText:string
    changePostText:(postText:any)=>void
}

export const MyPosts = (props: MyPostsPropsType) => {

    let getElementValue = React.createRef<HTMLTextAreaElement>()


    /* let addPost = () => {
         alert(getElementValue.current?.value)
     }*/

    /*let a = ''
    let setPost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        a = e.currentTarget?.value
        return a
    }
    let addPost = () => {
        alert(a)
    }
*/
    let addPost = () => {
        props.addPost(getElementValue.current?.value)
    }

    /*let onChangePost=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        props.changePostText(e.currentTarget.value)
    }*/
    let onChangePost=()=>{
        props.changePostText(getElementValue.current?.value)
    }

    return (
        <div className={s.item}>
            <textarea
                ref={getElementValue}
                /*onChange={setPost}*/
                className={s.txt}
                onChange={onChangePost}
                value={props.newPostText}
            />
            <button onClick={addPost} className={s.btn}> Add Post</button>

            {props.posts.map(t => <Post key={t.id} likes={t.likes} id={t.id} message={t.message}/>)}
        </div>
    )
}