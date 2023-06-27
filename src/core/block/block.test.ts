import { expect } from 'chai';
import Block from './block';

describe('test for Block class', () => {
    const createBlock = (props: {name: string}) => {
        class MockButton extends Block {
            render(): string {
                const {name} = this.props;

                return `<button>${name}</button>`;
            }
        }

        return new MockButton(props);
    }

    it('should be render string', function () {
        const block = createBlock({name: 'NameButton'});

        expect(block.render()).to.equal('<button>NameButton</button>');
    });

    it('should change name button', function () {
        const block = createBlock({name: 'NameButton'});

        block.setProps({name: 'NewNameButton'});

        expect(block.render()).to.equal('<button>NewNameButton</button>');
    });
});
