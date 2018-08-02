import { Action, State } from '@ngxs/store';

export class AddRequest {
    static readonly type = '[loading] request emit';
    constructor() {}
}

export interface LoadingStore {
    reqCount: number;
}

@State<LoadingStore>({
    name: 'loading',
    default: {
        reqCount: 0,
    }
})

export class LoadingState {
    @Action(AddRequest)
    addRequest(ctx) {
        const state = ctx.getState();
        ctx.setState({
            reqCount: state.reqCount + 1
        });
    }
}
