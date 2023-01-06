import { Demo } from "../modal/demo.modal";
import * as DemoActions from './../actions/demo.actions';

const initialState: Demo = {

    name: 'Harisudhan',
    gender: 'Male'
}
const newArray: any = [initialState];
let values: Demo[];

export function reducer(state: Demo[] = [initialState], action: any) {

    switch (action.type) {
        case DemoActions.ADD_DEMO:
            return [...state, action.payload];

        case DemoActions.REMOVE_DEMO:
            values = Object.values(state)
            newArray.push(values)

            for (let i = 0; i <= newArray[1].length; i++) {
                newArray[1][i] == action.payload ? (console.log('i', i), console.log("action", action.payload)
                    , newArray[1].splice(i, 1), console.log("::::::::::::", newArray[1])) : '';
            }
            return [...newArray[1]]
            
        default:
            return state;
    }
}