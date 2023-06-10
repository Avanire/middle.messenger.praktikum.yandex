export const LOGIN_REGEXP = '^(?=.{3,20}$)([a-zA-Z0-9_-]*[a-zA-Z_-][a-zA-Z0-9_-]*)$';
export const PASSWORD_REGEXP = '(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,40}';
export const EMAIL_REGEXP = '^[a-zA-Z0-9_-]+@[a-zA-Z]+.[a-zA-Z]+$';
export const NAME_REGEXP = '^(?=.*[A-ZА-ЯЁ])([A-Za-zА-Яа-яЁё\\\\-]+)';
export const PHONE_REGEXP = '^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$';
export const MESSAGE_REGEXP = '.*\\S.*';
export enum METHODS {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
}
export enum EVENTS {
    INIT= 'init',
    FLOW_CDM = 'flow:component-did-mount',
    FLOW_CDU = 'flow:component-did-update',
    FLOW_RENDER = 'flow:render',
}
