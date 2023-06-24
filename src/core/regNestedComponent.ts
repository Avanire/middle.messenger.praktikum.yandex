import * as Handlebars from 'handlebars';
import Block from './block/block';

const regNestedComponent = (name: string, Component: typeof Block) => {
    Handlebars.registerHelper(name, context => {
        if (!context.data.root.children) {
            context.data.root.children = {};
        }

        const { children } = context.data.root;
        const component = new Component(context.hash);

        children[component._id] = component;

        return `<div data-id="${component._id}"></div>`;
    });
};

export default regNestedComponent;
