declare const _default: import("vue").DefineComponent<{
    text: {
        type: StringConstructor;
        default: string;
    };
}, {
    events: {
        dragstart: (e: DragEvent) => void;
        drag: (e: DragEvent) => void;
        dragend: (e: DragEvent) => void;
    };
    style: import("vue").Ref<{
        left: string;
        top: string;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    text?: unknown;
} & {
    text: string;
} & {}>, {
    text: string;
}>;
export default _default;
