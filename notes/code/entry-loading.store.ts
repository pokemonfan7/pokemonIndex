import { Action, State } from '@ngxs/store'

export class HiddenEntryLoading {
    static readonly type = '[EntryLoading] hidden entry loading'

    constructor() {
    }
}

export interface EntryLoadingStore {
    loading: boolean
}

@State<EntryLoadingStore>({
    name: 'entryLoading',
    defaults: {loading: true}
})

export class EntryLoadingState {
    @Action(HiddenEntryLoading)
    hiddenEntryLoading(ctx) {
      ctx.setState({
          loading: false
      })
    }
}

//this.store.dispatch(new HiddenEntryLoading())

//this.store.select(state => state.entryLoading.loading).subscribe(value => {
// this.loading = value
// this.cdf.detectChanges()
// })