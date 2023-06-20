import {
    Indexed, StoreEvents, TProps, TStore,
} from '../utils/types.ts';
import Block from '../core/block/block.ts';
import store from '../core/store.ts';
import { deepEquals } from '../utils/utils.ts';

const withStore = (
    mapStateToProps: (state: TStore) => Indexed,
) => (Component: typeof Block) => class extends Component {
    constructor(props: TProps) {
        let state = mapStateToProps(store.getState());

        super({ ...props, ...state });

        store.on(StoreEvents.Updated, () => {
            const newState = mapStateToProps(store.getState());

            if (!deepEquals(state, newState)) {
                this.setProps({ ...newState });
            }

            state = newState;
        });
    }
};

export default withStore;
