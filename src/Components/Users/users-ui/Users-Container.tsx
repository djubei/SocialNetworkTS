import React from "react";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC, setLoadingStatusAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../users-bll/users-reducer";
import {Dispatch} from "redux";
import {StoreStateType} from "../../../redux/store";
import axios from "axios";
import {Users} from "./Users";
import s from "./Users.module.css";
import {Preloader} from "../../../Common/Preloader";


type UsersApiComponentPropsType = {
    users: UserType[]
    setUsers: (users: UserType[]) => void,
    follow: (id: number) => void
    unfollow: (id: number) => void
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCountAC: (totalUsersCount: number) => void
    setLoadingStatus: (status: boolean) => void
    isFetching: boolean
}

export class UsersApiComponent extends React.Component<UsersApiComponentPropsType> {
    constructor(props: UsersApiComponentPropsType) {
        super(props);
    }

    componentDidMount() {
        this.props.setLoadingStatus(true)
        console.log(this.props.isFetching)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                    this.props.setLoadingStatus(false)
                    console.log(response.data.items)
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCountAC(response.data.totalCount)
                }
            )
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setLoadingStatus(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response) => {
                    this.props.setLoadingStatus(false)
                    console.log(response.data)
                    this.props.setUsers(response.data.items)
                }
            )
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages[i + 1] = i
        }
        return (
            <>
                {this.props.isFetching && <Preloader/>}
                <Users
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    onPageChanged={this.onPageChanged}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    isFetching={this.props.isFetching}
                />
            </>

            /*  <div>
                  <div>
                      {pages.map(t => < span onClick={(event) => {
                          this.onPageChanged(t)
                      }}
                                             className={this.props.currentPage === t ? s.bold : ''}>{t}</span>)}
                  </div>
                  <div>
                      {this.props.users.map(t => <div key={v1()}>
                          <div>
                      <span>
                          <div>
                              <img style={{width: 115, height: 105}}
                                   src={t.photos.large != null ? t.photos.large : image}
                                   alt="zx"/>
                          </div>
                          <div>
                              {t.followed ? <button onClick={() => {
                                      this.props.unfollow(t.id)
                                  }} style={{backgroundColor: 'red'}}>Unfollow</button> :
                                  <button onClick={() => {
                                      this.props.follow(t.id)
                                  }} style={{backgroundColor: "aquamarine"}}>follow</button>}
                          </div>
                      </span>
                              <span>
                          <span>
                              <div>{t.name}</div><div>{t.status}</div>
                          </span>
                          <span>
                              <div>{'t.location.city'}</div><div>{'t.location.country'}</div>
                          </span>
                      </span>
                          </div>
                      </div>)}
                  </div>
              </div>*/
        )
    }

}


type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

const MapStateToProps = (state: StoreStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

type MapDispatchToPropsType = {
    setUsers: (users: UserType[]) => void,
    follow: (id: number) => void,
    unfollow: (id: number) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCountAC: (totalUsersCount: number) => void
    setLoadingStatus: (status: boolean) => void
}

const MapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
        follow: (id: number) => dispatch(followAC(id)),
        unfollow: (id: number) => dispatch(unfollowAC(id)),
        setCurrentPage: (pageNumber: number) => dispatch(setCurrentPageAC(pageNumber)),
        setTotalUsersCountAC: (totalUsersCount: number) => dispatch(setTotalUsersCountAC(totalUsersCount)),
        setLoadingStatus: (status: boolean) => dispatch(setLoadingStatusAC(status))
    }
}


export const UsersContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, StoreStateType>
(MapStateToProps, MapDispatchToProps)(UsersApiComponent)

let MDTP = {setUsersAC,followAC,unfollowAC,setCurrentPageAC,setTotalUsersCountAC,setLoadingStatusAC}

/*export const UsersApiComponent = (props: UsersPropsType) =>
{

    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
                console.log(response.data.items)
                props.setUsers(response.data.items)
            })
        }
    }

    return (

        <div>
            <button onClick={getUsers}>Get UsersApiComponent</button>
            <div>
                {props.users.map(t => <div key={t.id}>
                    <div>
                    <span>
                        <div>
                            <img style={{width: 115, height: 105}}
                                 src={t.photos.large != null ? t.photos.large : image}
                                 alt="zx"/>
                        </div>
                        <div>
                            {t.followed ? <button onClick={() => {
                                    props.unfollow(t.id)
                                }} style={{backgroundColor: 'red'}}>Unfollow</button> :
                                <button onClick={() => {
                                    props.follow(t.id)
                                }} style={{backgroundColor: "aquamarine"}}>follow</button>}
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{t.name}</div><div>{t.status}</div>
                        </span>
                        <span>
                            <div>{'t.location.city'}</div><div>{'t.location.country'}</div>
                        </span>
                    </span>
                    </div>
                </div>)}
            </div>
        </div>
    )
}
*/

/*
if (props.users.length===0)
{
    props.setUsers([
        {
            id: 1,
            photoUrl: "https://cdnimg.rg.ru/i/gallery/d171bca4/1_6d98de9d.jpg",
            followed: false,
            fullName: 'Dimich',
            status: 'Im a boss',
            location: {country: 'Belarus', city: 'Minsk'}
        },
        {
            id: 2,
            photoUrl: "https://cdnimg.rg.ru/i/gallery/d171bca4/1_6d98de9d.jpg",
            followed: true,
            fullName: 'Andrew',
            status: 'Im a boss too',
            location: {country: 'Russia', city: 'Moscow'}
        },
        {
            id: 3,
            photoUrl: "https://cdnimg.rg.ru/i/gallery/d171bca4/1_6d98de9d.jpg",
            followed: true,
            fullName: 'Sasha',
            status: 'Im a boss free',
            location: {country: 'Ukraine', city: 'Kiev'}
        },
    ],)
}
*/