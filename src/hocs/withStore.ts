import {
    Indexed, StoreEvents, TProps, TStore,
} from '../utils/types';
import Block from '../core/block/block';
import store from '../core/store';
import { deepEquals } from '../utils/utils';

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
