import Block from './block/block.ts';

export default (query: string, block: Block) => {
    const root = document.getElementById(query);

    if (root) {
        root.appendChild(block.getContent());

        block.dispatchComponentDidMount();

        return root;
    }

    throw new Error(`The block does not exist: ${root}`);
};
