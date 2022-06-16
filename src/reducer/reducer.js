export const initialState = {
    email: null,
    password: null,
    token: null,

}

const reducer = (prevSate, action) =>{
    //action -> type, [data]
    switch (action.type) {
        case 'SET_TOKEN':
            return { // return new state
                ...prevSate, // giữ nguyên mọi state trừ token
                token: action.token
            }          
        default: // nếu không phải trong các event được định nghĩa thì trả về state cũ để ko crash app
            return state;
    }

}
export default reducer;
