declare module '*.css' {
    const styles: any;
    export = styles;
}

declare module '*.pcss' {
    export const b: (...args: unknown[]) => string;
}

declare module '*.svg' {
    const content: string;
    export default content;
}

declare module '*.png' {
    const content: string;
    export default content;
}

declare module '*.jpg' {
    const content: string;
    export default content;
}

declare module '*.csv' {
    const content: string;
    export default content;
}
